import { useState } from "react";

const ProductInfo = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  const handleColorChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedColor(selectedValue);
    console.log(selectedColor);
  };
  return (
    <div className="inner-top">
      <div className="inner-top__pictchers">
        <img src="" alt="" />
        <div className="slider"></div>
      </div>

      <div className="inner-top__inform">
        <div className="inform-raiting"></div>
        <h2 className="inform-title">Title</h2>
        <p className="inform-category">Category</p>
        <div className="inform-purches">
          <p className="inform-price">23232 р</p>
          <button>Купить</button>
          <div className="inform-addFavorite">
           
            <img src="../../../public/images/icons/wishlist-icon.svg" alt="heart" />{" "}
            <p> Добавить в желаемое</p>
          </div>
        </div>
        <form className="form" action="submit">
          <div className="form__group">
            <p>Цвет</p>

            <select
              value={selectedColor}
              onChange={handleColorChange}
              id="color"
              name="color"
              style={{ backgroundColor: selectedColor }}
            >
              <option value="red" className="red"></option>
              <option value="green" className="green"></option>
              <option value="blue" className="blue"></option>
              <option value="yellow" className="yellow"></option>
            </select>
          </div>
          <div className="form__group">
            <p>Количество</p>
            <input type="number" min="0" />
          </div>
          <div className="  form__group">
            <label htmlFor="cities">Размер (Д × Ш × В)</label>
            <select id="cities">
              <option value="250СМ × 105СМ × 95СМ">250СМ × 105СМ × 95СМ</option>
              <option value="218СМ × 95СМ × 90СМ">218СМ × 95СМ × 90СМ</option>
              <option value="190СМ × 80СМ × 85СМ">190СМ × 80СМ × 85СМ</option>
            </select>
          </div>
        </form>

        <h4>Описание</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum
          quae doloribus modi, tempore molestias accusantium cum laboriosam sint
          illum soluta eos eligendi minus. Sint itaque ut, doloribus, animi vel
          nam maxime voluptatem voluptas laudantium corrupti suscipit impedit
          minima ab.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
