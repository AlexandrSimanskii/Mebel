import { useContext, useEffect,  } from "react";
import { Link, useLocation } from "react-router-dom";
import { CustomContext } from "../../utils/Context/Context";
import NavList from "../NavList/NavList";


const Header = () => {
  const {
    logOutUser,
    user,
    navigate,
    search,
    setSearch,
    location,
    setCategory,
    hitSale,
    setPages,
  } = useContext(CustomContext);
 



  useEffect(() => {
    location.pathname !== "/catalog" && setSearch("");
  }, [location.pathname]);

  return (
    <div className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-wrapper">
            <div className="header__top-left">
              <ul className="header__list">
                <li>
                  <Link to={"/"}>Главная</Link>
                </li>
                <li>
                  <Link to={"about"}>О нас</Link>
                </li>
                <li>
                  <Link to={"room"}>Личный кабинет</Link>
                </li>
              </ul>
            </div>
            <div className="header__top-right">
              <ul className="header__list">
                <li>
                  <img src="../../../public/images/icons/phone.svg" alt="" />
                  <a className="header__list-phone" href="tel:89648999119">
                    8 (964) 89 99 119
                  </a>
                </li>
                <li ><Link to={"/about"}>
                  <img
                    className="img"
                    src="../../../public/images/icons/delivery-icon.svg"
                    alt=""
                  />
                  <p className="header__list-deliver" href="#">
                    Доставка
                  </p></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="header__main">
          <Link to={"/"}>
            <h1>
              <img src="../../../public/images/image/LOGO.svg" alt="" />
            </h1>
          </Link>
          <div className="header-search">
            <input
              onChange={(event) => {
                location.pathname !== "/catalog" && navigate("/catalog"),
                  setSearch(event.target.value);
              }}
              placeholder="Введите категорию товаров"
              type="text"
              value={search}
            />
            <div
              className={search.length ? "closed" : "displayNone"}
              onClick={() => setSearch("")}
            ></div>
          </div>
          <div className="header-menu">
            <Link to={"/favorites"}>
              <div
                className={`menu-img ${
                  location.pathname == "/favorites" && "active"
                }`}
              >
                <img
                  src="../../../public/images/icons/wishlist-icon.svg"
                  alt="heart"
                />
              </div>
            </Link>
            <div
              className={`menu-img ${location.pathname == "/cart" && "active"}`}
            >
              <Link to={user.email?.length ? "/cart" : "/login"}>
                <img src="../../../public/images/icons/bag.svg" alt="bag" />
              </Link>
            </div>
            <div className="menu-img">
              <Link to={"/login"}>
                <p onClick={() => logOutUser()}>
                  {user.email?.length ? "Выйти" : "Войти"}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="header__nav">
        <NavList/>
        </div>
      </div>
    </div>
  );
};

export default Header;
