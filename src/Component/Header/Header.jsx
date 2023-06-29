const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-wrapper">
            <div className="header__top-left">
              <ul className="header__list">
                <li>
                  <a href="#">Главная</a>
                </li>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="header__top-right">
              <ul className="header__list">
                <li>
                  <img src="../../../public/images/icons/phone.svg" alt="" />
                  <a className="header__list-phone" href="#">
                    8 (964) 89 99 119
                  </a>
                </li>
                <li>
                  <img
                    className="img"
                    src="../../../public/images/icons/delivery-icon.svg"
                    alt=""
                  />
                  <a className="header__list-deliver" href="#">
                    Доставка
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="header__main">
          <img src="../../../public/images/image/LOGO.svg" alt="" />
          <div className="header-search">
            <input placeholder="Поиск" type="text" />
          </div>
          <div className="header-menu">
            <div className="menu-img active">
              <img
                src="../../../public/images/icons/wishlist-icon.svg"
                alt=""
              />
            </div>
            <div className="menu-img">
              <img src="../../../public/images/icons/bag.svg" alt="" />
            </div>
            <div className="menu-img">
              <img src="../../../public/images/icons/profile-icon.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="header__nav">
          <ul className="header__nav-list">
            <li className="  nav-list-kitchen b">
              <a  href="#">
                Кухни
              </a>
            </li>
            <li className="nav-list-bedroom">
              <a href="#">Спальни</a>
            </li>
            <li className="nav-list-livingRoom">
              <a href="#">Гостиные</a>
            </li>
            <li className="nav-list-hollway">
              <a href="#">Прихожие</a>
            </li>
            <li className="nav-list-office">
              <a href="#">Офисная мебель</a>
            </li>
            <li className="nav-list-childrensRoom">
              <a href="#">Детские</a>
            </li>
            <li className="nav-list-sale">
              <a className="active" href="#">Акция</a>
            </li>
            <li className="nav-list-new">
              <a href="#">Новинки</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
