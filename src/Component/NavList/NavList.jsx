import React, { useContext, useEffect, useState } from "react";
import { CustomContext } from "../../utils/Context/Context";
import { useLocation } from "react-router-dom";

const NavList = () => {
  const { setCategory, navigate, setPages, setActiveItem, activeItem } =
    useContext(CustomContext);

  const [listOpen, setListOpen] = useState(false);

  const { pathname } = useLocation();

  const getCategory = (event) => {
    if (event.target.localName === "li") {
      const newCategory = event.target.textContent;
      setCategory(newCategory === "Акция" ? "" : newCategory);
      pathname === "/catalog" ? null : navigate("/catalog");
      setPages(1);
      setActiveItem(newCategory);
    }
  };

  return (
    <div className="nav">
      <ul
        id="navList"
        className={`nav-list ${listOpen && "nav-list-active"} `}
        onClick={getCategory}
      >
        <li
          className={`nav-list-kitchen ${
            pathname === "/catalog" && activeItem === "Кухни" ? "active" : ""
          }`}
        >
          Кухни
        </li>
        <li
          className={`nav-list-bedroom ${
            pathname === "/catalog" && activeItem === "Спальни" ? "active" : ""
          }`}
        >
          Спальни
        </li>
        <li
          className={`nav-list-livingRoom ${
            pathname === "/catalog" && activeItem === "Гостиные" ? "active" : ""
          }`}
        >
          Гостиные
        </li>
        <li
          className={`nav-list-hallway ${
            pathname === "/catalog" && activeItem === "Прихожие" ? "active" : ""
          }`}
        >
          Прихожие
        </li>
        <li
          className={`nav-list-office ${
            pathname === "/catalog" && activeItem === "Офисная мебель"
              ? "active"
              : ""
          }`}
        >
          Офисная мебель
        </li>
        <li
          className={`nav-list-childrensRoom ${
            pathname === "/catalog" && activeItem === "Детские" ? "active" : ""
          }`}
        >
          Детские
        </li>
        <li
          className={`nav-list-sale ${
            pathname === "/catalog" && activeItem === "Акция" ? "active" : ""
          }`}
        >
          Акция
        </li>
        <button
          type="button"
          onClick={() => {
            setListOpen((prev) => !prev);
          }}
          className="nav-list__img"
        >
         
          {listOpen ? (
            <img
              className="img-open"
              width={20}
              src="../../../public/images/icons/closed.svg"
              alt=""
            />
          ) : (
            <img
              className="img-closed"
              src="../../../public/images/icons/etc.svg"
              alt=""
            />
          )}
        </button>
        <span></span>
      </ul>
    </div>
  );
};

export default NavList;
