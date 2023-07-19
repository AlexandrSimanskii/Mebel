/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);

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
          className="card__favorite"
          src="../../../../public/images/icons/favorite.svg"
          alt=""
        />
      </div>
      <div className="card__main">
        <div className="main-img">
         <Link to={`/product/${item.id}`}> <img src={item.image} alt="category" /></Link>
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

        <button className="bottom-btn">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default Card;
