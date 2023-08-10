import { useContext, useState } from "react";
import { CustomContext } from "../../utils/Context/Context";

const ProductInfo = ({ product }) => {

  const{favorites,favoritesHandler}=useContext(CustomContext)

  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("218 СМ×95 СМ×90 СМ");
  const [selectedPSC, setSelectedPSC] = useState(0);

  const [sizeVisible, setSizeVisible] = useState(false);
  const [colorVisible, setColorVisible] = useState(false);
  const [pscVisible, setPscVisible] = useState(false);
  const [color, setColor] = useState("red");

  const handleColorChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedColor(selectedValue);
  };
  console.log(product);
  return (
    <div className="purches__inform">
      <h3>{product.title}</h3>
      <p className="purches__inform-category">{product.category}</p>
      <div className="payGroup">
        <p className="payGroup-price">{product.price}₽</p>
        <button>Купить</button>
        <div className="payGroup-favorite">
          <img  onClick={() => favoritesHandler(product)}
            src={
              favorites.some((el) => el.id === product.id)
                ? "../../../public/images/icons/HeartRed.svg"
                : "../../../../public/images/icons/favorite.svg"
            }
            alt=""
          />
          <p>Добавить в желаемое</p>
        </div>
      </div>
      <div className="chengeParamets">
        <div className="chengeColor">
          <div
            onClick={() => setColorVisible((prev) => !prev)}
            className="select"
          >
            <div
              style={{ background: color, width: 20, height: 20 }}
              className="selected"
            ></div>
            <img
              className={colorVisible ? "rotateImg" : "notRotateImg"}
              src="../../../public/images/icons/Tick.svg"
              alt="arrow"
            />
          </div>
          <ul className={colorVisible ? "option" : "option displayNone"}>
            <li
              onClick={() => {
                {
                  setColor("blue"), setColorVisible(false);
                }
              }}
              className="option__color option__color-blue"
            ></li>
            <li
              onClick={() => {
                setColor("green"), setColorVisible(false);
              }}
              className="option__color option__color-green"
            ></li>
            <li
              onClick={() => {
                setColor("black"), setColorVisible(false);
              }}
              className="option__color option__color-black"
            ></li>
            <span></span>
          </ul>
        </div>

        <div className="chengePSC">
          <button
            onClick={() => {
              setSelectedPSC((prev) => {
                return prev > 0 ? prev - 1 : 0;
              });
            }}
          >
            -
          </button>
          <input
            placeholder="0"
            type="number"
            value={selectedPSC <= 0 ? "" : selectedPSC} // Если selectedPSC равен 0, то отображаем пустую строку
            min={-Infinity}
            onChange={(e) => {
              const inputValue = Number(e.target.value);
              setSelectedPSC(isNaN(inputValue) ? 0 : inputValue); // Если введено не число, то устанавливаем 0
            }}
          />
          <button
            onClick={() => {
              setSelectedPSC((prev) => Number(prev) + 1);
            }}
          >
            +
          </button>
        </div>

        <div className="chengeSize">
          <div
            className="select"
            onClick={() => setSizeVisible((prev) => !prev)}
          >
            <div className="selected selected-size"> {selectedSize}</div>
            <img
              className={sizeVisible ? "rotateImg" : ""}
              src="../../../public/images/icons/Tick.svg"
              alt="arrow"
            />
          </div>

          <ul className={sizeVisible ? "option" : "option displayNone"}>
            <li
              onClick={() => {
                setSelectedSize("218 СМ×95 СМ×90 СМ", setSizeVisible(false));
              }}
              className="option__size"
            >
              218 СМ×95 СМ×90 СМ
            </li>
            <li
              onClick={() => {
                setSelectedSize(" 318 СМ×95 СМ×90 СМ"), setSizeVisible(false);
              }}
              className="option__size "
            >
              318 СМ×95 СМ×90 СМ
            </li>
            <li
              onClick={() => {
                setSelectedSize("418 СМ×95 СМ×90 СМ"), setSizeVisible(false);
              }}
              className="option__size "
            >
              418 СМ×95 СМ×90 СМ
            </li>
            <span></span>
          </ul>
        </div>
      </div>
      <div className="productDescription">
        <h4>Описание</h4>
        <p>{product.description}}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
