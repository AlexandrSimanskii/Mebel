import SelectFilter from "../SelectFilter/SelectFilter";

import RangeInput from "./RangeInput.jsx";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CustomContext } from "../../utils/Context/Context";
import axios from "../../utils/Axios/axios";


// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const AsideFilter = ({
  sort,
  setSort,
  category,
  setCategory,
  slider,
  setSlider, setProducts,pages
}) => {


  const { search,  } = useContext(CustomContext);


  const resetFilter = () => {
    setSort("");
    setCategory("");
    setSlider([0, 0]);
  };
  
  //  Получаем отфильтрованные продукты
  const getFilterCategory = () => {
    let qweryParamsApi = `${search.length ? `title_like=${search}&` : ""}${
      category.length ? `category=${category}&` : ""
    }${
      sort.length && sort !== "rate"
        ? `_sort=price&_order=${sort}`
        : sort.length
        ? `_sort=price&_order=desc`
        : ""
    }&_page=${pages}&_limit=6`;

    let queryParamsFromTo = `price_gte=${slider[0]}&price_lte=${slider[1]}`;

    axios.get(`/products?${qweryParamsApi}${queryParamsFromTo}`).then((res) => {
      setProducts(res.data);
    });
  };

  return (
    <aside className="catalog__aside">
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Раздел</h2>
        <SelectFilter
          title="Категория"
          state={category}
          setState={setCategory}
          array={[
            "Кухни",
            "Спальни",
            "Гостиные",
            "Прихожие",
            "Офисная мебель",
            "Детские",
           
          ]}
        />
        <SelectFilter
          title="Сортировать"
          state={sort}
          setState={setSort}
          array={["asc", "desc", "rate"]}
        />
      </div>
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Цена</h2>
        <RangeInput slider={slider} setSlider={setSlider} />
        <div className="catalog__aside-prices">
          <div className="catalog__aside-price">{slider[0]} ₽</div>-
          <div className="catalog__aside-price">{slider[1]} ₽</div>
        </div>
      </div>
      <div className="catalog__aside-btns">
        <Button variant="contained" onClick={resetFilter}>
          Сбросить
        </Button>
        <Button variant="contained" onClick={getFilterCategory}>
          Отфильтровать
        </Button>
      </div>
    </aside>
  );
};

export default AsideFilter;
