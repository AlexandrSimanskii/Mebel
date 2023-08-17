/* eslint react/prop-types: 0 */

import { Link, useNavigate } from "react-router-dom";
import { CustomContext } from "../../utils/Context/Context";
import { useContext, useEffect } from "react";
import axios from "../../utils/Axios/axios";

const Card = ({ item }) => {
  const {
    favorites,
    favoritesHandler,
    user,
    addCarts,
    addCardsCountPlus,
    addCardsCountMinus,
  } = useContext(CustomContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user.carts);
  }, []);

  return (
    <div className="card">
      <div className="card__top">
        <div className="card__sale">
          {item.sale > 0 ? (
            <>
              <img
                src="../../../../public/images/icons/sale-red.svg"
                alt="sale"
              />
              <p>{item.sale} %</p>
            </>
          ) : (
            ""
          )}
        </div>
        <img
          onClick={() => favoritesHandler(item)}
          className="card__favorite"
          src={
            favorites.some((el) => el.id === item.id)
              ? "../../../public/images/icons/HeartRed.svg"
              : "../../../../public/images/icons/favorite.svg"
          }
          alt=""
        />
      </div>
      <div className="card__main">
        <div className="main-img">
          <Link to={`/product/${item.id}`}>
            <img src={item.image} alt="category" />
          </Link>
        </div>
        <h3 className="main-title">{item.title}</h3>
        <p className="main-category">{item.category}</p>
        <div className="price-box">
          <p className="main-price">{item.price}</p>
          <p className="main-sale">37 990₽</p>
        </div>
      </div>
      <div className="card__bottom">
        <h3 className="bottom-title">Размеры</h3>

        <dl className="bottom-table">
          <div>
            <dt>Ширина</dt>
            <dd>{item.width} cm</dd>
          </div>
          <div>
            <dt>Глубина</dt>
            <dd>{item.deep} cm</dd>
          </div>
          <div>
            <dt>Высота</dt>
            <dd>{item.height} cm</dd>
          </div>
        </dl>

        {user.carts?.some((el) => el.id == item.id) ? (
          <div className="card__counter">
            <button onClick={() => addCardsCountPlus(item.id)}>+</button>
            <span> {user.carts.find((el) => el.id === item.id).count}</span>
            <button onClick={() => addCardsCountMinus(item.id)}>-</button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              if ("id" in user) {
                addCarts(item);
              } else {
                navigate("/login");
              }
            }}
            className="bottom-btn"
          >
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
