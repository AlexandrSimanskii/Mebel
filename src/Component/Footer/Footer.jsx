import NavList from "../NavList/NavList";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-nav">
   <NavList/>
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
