const Card = () => {
  return (
    <div className="card">
      <div className="card__top">
        <div className="card__sale">
          <img src="../../../../public/images/icons/sale-red.svg" alt="sale" />
          <p>-25%</p>
        </div>
        <img
          className="card__favorite"
          src="../../../../public/images/icons/favorite.svg"
          alt=""
        />
      </div>
      <div className="card__main">
        <div className="main-img">
          <img src="../../../../public/images/image/cheir.png" alt="category" />
        </div>
        <h3 className="main-title">Кускен Navy Blue</h3>
        <p className="main-category">Барные стулья</p>
        <div className="price-box">
          <p className="main-price">2 300₽</p>
          <p className="main-sale">37 990₽</p>
        </div>
      </div>
      <div className="card__bottom">
        <h3 className="bottom-title">Размеры</h3>

        <dl className="bottom-table">
          <div>
            <dt>Ширина</dt>
            <dd>43 cm</dd>
          </div>
          <div>
            <dt>Глубина</dt>
            <dd>50cm</dd>
          </div>
          <div>
            <dt>Высота</dt>
            <dd>70cm</dd>
          </div>
        </dl>

        <button className="bottom-btn">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default Card;
