import { Fragment, useState, useContext, useEffect } from "react";
import AsideFilter from "../../Component/AsideFilter/AsideFilter";
import { CustomContext } from "../../utils/Context/Context";
import axios from "../../utils/Axios/axios";
import Card from "../../Component/Card/Card";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [slider, setSlider] = useState([0,0]);

  const { search, setSearch } = useContext(CustomContext);

  const getMinMaxPrice = (prod) => {
    let allPrices = [];
    prod.map((item) => {
      allPrices = [...allPrices, item.price];
    });
    allPrices = allPrices.sort((a, b) => a - b);

    setSlider([allPrices[0], allPrices.at(-1)]);
  };

  useEffect(() => {
    let qweryParamsApi = `${search.length ? `title_like=${search}&` : ""}${
      category.length ? `category=${category}&` : ""
    }${
      sort.length && sort !== "rate"
        ? `_sort=price&_order=${sort}`
        : sort.length
        ? `_sort=price&_order=desc`
        : ""
    }`;

    let queryParamsFromTo = `price_gte=${slider[0]}&price_lte=${slider[1]}`;

    axios.get(`/products?${qweryParamsApi}${queryParamsFromTo}`).then((res) => {
      setProducts(res.data);
    });
  }, [search, sort, category,slider]);




  
  useEffect(() => {
    products.length && getMinMaxPrice(products);
  }, []);

  console.log(slider);
  //   useEffect(() => {
  //     let queryParamsApi = `?${search.length ? `title_like=${search}&` : ''}${category.length ? `category=${category}&` : ''}${sort.length && sort !== 'rate' ? `_sort=price&_order=${sort}&` : sort.length ? `_sort=rate&_order=desc&` : ''}`

  //     let queryParamsFromTo = `price_gte=${slider[0]}&price_lte=${slider[1]}`

  //     axios(`products${queryParamsApi}${queryParamsFromTo}`)
  //         .then((res) => setProducts(res.data))

  // },[search, sort , category, slider])

  return (
    <main>
      <div className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <AsideFilter
              slider={slider}
              setSlider={setSlider}
              category={category}
              setCategory={setCategory}
              sort={sort}
              setSort={setSort}
            />
            <div className="catalog__content">
              {products.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <Card item={item} />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
