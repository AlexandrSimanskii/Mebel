import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomContext } from "../../utils/Context/Context";
import axios from "../../utils/Axios/axios";

const Header = () => {
  const {
    logOutUser,
    user,
    navigate,
    search,
    setSearch,
    location,
    category,
    setCategory,
    setProducts,
  } = useContext(CustomContext);
  console.log(category);

  const getCategory = (event) => {
    if (event.target.localName === "li") {
      const newCategory = event.target.textContent;
      setCategory(newCategory);

      try {
        axios(`products?category_like=${newCategory}`).then((res) => {
          setProducts(res.data);
          navigate("/catalog");
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          <ul className="header__nav-list" onClick={getCategory}>
            <li className="  nav-list-kitchen b">Кухни</li>
            <li className="nav-list-bedroom">Спальни</li>
            <li className="nav-list-livingRoom">Гостиные</li>
            <li className="nav-list-hollway">Прихожие</li>
            <li className="nav-list-office">Офисная мебель</li>
            <li className="nav-list-childrensRoom">Детские</li>
            <li className="nav-list-sale">Акция</li>
            <li className="nav-list-new">Новинки</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
