import { useContext, useEffect, useState } from "react";
import { CustomContext } from "../../utils/Context/Context";
import { useForm } from "react-hook-form";

const ProductInfo = ({ product }) => {
  const {
    user,
    favorites,
    favoritesHandler,
    addCarts,
    addCardsCountPlus,
    addCardsCountMinus,
  } = useContext(CustomContext);

  const [btnPayVisible, setBtnPayVisible] = useState(false);
  const [selectedPSC, setSelectedPSC] = useState(1);

 
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
useEffect(()=>{setBtnPayVisible(!user.carts.some((item) => item.id === product.id))},[])
  

  return (
    <div className="purches__inform">
      <h3>{product.title}</h3>
      <p className="purches__inform-category">{product.category}</p>
      <div className="payGroup">
        <p className="payGroup-price">{product.price}₽</p>
        {btnPayVisible ? (
          <button
            form="chengePSC"
            onClick={() => {
              addCarts(product);
              setBtnPayVisible(false)
            }}
          >
            Купить
          </button>
        ) : (
          <form className="chengePSC">
            <button
              type="button"
              onClick={() => {
                setSelectedPSC((prev) => {
             
                  return prev > 0 ? prev - 1 : setBtnPayVisible(true);
                });
                addCardsCountMinus(product.id);
              }}
            >
              -
            </button>
            <p>8</p>
            {/* <input
              placeholder="0"
              type="number"
              value={selectedPSC <= 0 ? "" : selectedPSC} // Если selectedPSC равен 0, то отображаем пустую строку
              min={-Infinity}
              onChange={(e) => {
                const inputValue = Number(e.target.value);
                setSelectedPSC(isNaN(inputValue) ? 0 : inputValue); // Если введено не число, то устанавливаем 0
              }}
            /> */}
            <button
              type="button"
              onClick={() => {
                setSelectedPSC((prev) => Number(prev) + 1);
                addCardsCountPlus(product.id);
              }}
            >
              +
            </button>
          </form>
        )}

        <div className="payGroup-favorite">
          <img
            onClick={() => favoritesHandler(product)}
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
        {/* <div className="chengeSize">
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
        </div> */}
      </div>
      <div className="productDescription">
        <h4>Описание</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
