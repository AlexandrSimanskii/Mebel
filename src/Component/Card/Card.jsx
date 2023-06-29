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
        <div className="price-box"><p className="main-price">2 300₽</p><p className="main-sale">37 990₽</p></div>
      </div>
      <div className="card__bottom">
        <table>
          <caption>Размеры</caption>
          <tr>
            <th>Ширина</th>
            <th>Глубина</th>
            <th>Высота</th>
          </tr>
          <tr>
            <td>43 cm</td>
            <td>50cm</td>
            <td>70cm</td>
          </tr>
        </table>
        <button className="card__button">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default Card;
