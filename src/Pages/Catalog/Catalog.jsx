import { Fragment, useState, useContext, useEffect } from "react";
import AsideFilter from "../../Component/AsideFilter/AsideFilter";
import { CustomContext } from "../../utils/Context/Context";
import axios from "../../utils/Axios/axios";
import Card from "../../Component/Card/Card";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [slider, setSlider] = useState([0, 300000]);

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
    try {
      axios.get("products?&_limit=6").then((res) => {
        setProducts(res.data);
        res.data.length && getMinMaxPrice(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    products.length && getMinMaxPrice(products);
  }, [products]);

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
              setProducts={setProducts}
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
