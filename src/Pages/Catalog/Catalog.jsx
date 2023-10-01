import { Fragment, useState, useContext, useEffect, useRef } from "react";
import AsideFilter from "../../Component/AsideFilter/AsideFilter";
import { CustomContext } from "../../utils/Context/Context";
import axios from "../../utils/Axios/axios";
import Card from "../../Component/Card/Card";

const Catalog = () => {
  const {
    search,
    products,
    setProducts,
    category,
    setCategory,
    pages,
    setPages,
  } = useContext(CustomContext);
  const [countPages, setCountPages] = useState(0);
  const [sort, setSort] = useState("");
  const [slider, setSlider] = useState([0, 300000]);
  const [filterVisible, setFilterVisible] = useState(false);
  const filterBtn = useRef(null);

  const getMinMaxPrice = (prod) => {
    let allPrices = [];
    prod.map((item) => {
      allPrices = [...allPrices, item.price];
    });
    allPrices = allPrices.sort((a, b) => a - b);

    setSlider([allPrices[0], allPrices.at(-1)]);
  };

  const getProduct = () => {
    axios.get(`/products?sort_like=${search}`).then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(() => getProduct(), [search]);

  useEffect(() => {
    try {
      Promise.all([
        axios.get(`products?category_like=${category}&_page=${pages}&_limit=6`),
        axios.get(`products?category_like=${category}`),
      ]).then(([pagedProductsResponse, allProductsResponse]) => {
        const pagedProducts = pagedProductsResponse.data;
        const allProducts = allProductsResponse.data;
        setProducts(pagedProducts);
        pagedProducts.length && getMinMaxPrice(pagedProducts);

        const countPages = Math.ceil(allProducts.length / 6);
        setCountPages(countPages);
      });
    } catch (error) {
      console.log(error);
    }
  }, [pages, category]);

  useEffect(() => {
    products.length && getMinMaxPrice(products);
  }, [products]);

  window.addEventListener("click", (e) => {
    console.log();
  });
  return (
    <main>
      <div className="catalog">
        <div className="container">
          <button
            className="catalog__open-filter"
            onClick={() =>{setFilterVisible((prev)=>!prev)} }
          >
            {filterVisible?"Закрыть":"Фильтр"}
          </button>
          <div className="catalog__inner">
            <AsideFilter
              slider={slider}
              setSlider={setSlider}
              category={category}
              setCategory={setCategory}
              sort={sort}
              setSort={setSort}
              setProducts={setProducts}
              filterBtn={filterBtn}
              setFilterVisible={setFilterVisible}
              filterVisible={filterVisible}
            />

            <div className="catalog__content">
              <div className="catalog__content_inner">
                {products.map((item) => {
                  return (
                    <Fragment key={item.id}>
                      <Card item={item} />
                    </Fragment>
                  );
                })}
              </div>
              {countPages === 1 ? (
                ""
              ) : (
                <div className="catalog__content_btns">
                  <button
                    onClick={() => {
                      pages > 1 ? setPages((prev) => prev - 1) : null;
                    }}
                  >
                    Прев.
                  </button>
                  <p>{pages}</p>
                  <button
                    onClick={() => {
                      setPages((prev) => (countPages > prev ? prev + 1 : prev));
                    }}
                  >
                    След.
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
