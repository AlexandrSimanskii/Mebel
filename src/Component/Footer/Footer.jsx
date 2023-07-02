const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-nav">
          <table className="footer__table">
            <caption>Навигация</caption>
            <tbody>
              <tr>
                <td>
                  <a href="#">Кухни </a>
                </td>
                <td>
                  <a href="#">Прихожие</a>
                </td>
                <td>
                  <a href="#">Шкафы</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">Спальни</a>
                </td>
                <td>
                  <a href="#">Офисная мебель </a>
                </td>
                <td>
                  <a href="#">Матрасы</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">Гостинные </a>
                </td>
                <td>
                  <a href="#"> Детская</a>
                </td>
                <td>
                  <a href="#">Мягкая мебель</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="active" href="#">
                    Акция
                  </a>
                </td>
                <td>
                  <a href="#">Новинки</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="inform">
            <h2 className="inform-title">LM</h2>
            <p className="adress">
              г. Анапа, Анапское шоссе,
              <br />
              30 Ж/К Черное море
            </p>
            <div className="bottom-line">
              <p className="phone">
                <a href="#">8 (964) 89 99 119</a>
              </p>
              <p className="insta">
                <a href="#">INSTAGRAM</a>
              </p>
              <p className="mail">
                <a href="#">mebel_loft_anapa@mail.ru</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
