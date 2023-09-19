// import { useContext } from "react";
// import { CustomContext } from "../../utils/Context/Context";
// import { useLocation } from "react-router-dom";

// const NavList = () => {

// const {setCategory,navigate,setPages,setActiveItem,activeItem}=useContext(CustomContext)
// const { pathname } = useLocation();

// const getCategory = (event) => {
//     if (event.target.localName === "li") {
//       const newCategory = event.target.textContent;
//       setCategory(newCategory == "Акция" ? "": newCategory);
//       pathname == "/catalog" ? null : navigate("/catalog");
//       setPages(1)

//       setActiveItem(newCategory);
//     }
//   };

//     return (
//         <ul className="nav-list" onClick={getCategory}>
//         <li className={`nav-list-kitchen ${activeItem === "Кухни" ? "active" : ""}`}><div></div>Кухни</li>
//         <li className={`nav-list-bedroom ${activeItem === "Спальни" ? "active" : ""}`}>Спальни</li>
//         <li className={`nav-list-livingRoom ${activeItem === "Гостиные" ? "active" : ""}`}>Гостиные</li>
//         <li className={`nav-list-hollway ${activeItem === "Прихожие" ? "active" : ""}`}>Прихожие</li>
//         <li className={`nav-list-office ${activeItem === "Офисная мебель" ? "active" : ""}`}>Офисная мебель</li>
//         <li className={`nav-list-childrensRoom ${activeItem === "Детские" ? "active" : ""}`}>Детские</li>
//         <li className={`nav-list-sale ${activeItem === "Акция" ? "active" : ""}`}>Акция</li>
//       </ul>
//     );
// };

// export default NavList;
import React, { useContext, useEffect, useState } from "react";
import { CustomContext } from "../../utils/Context/Context";
import { useLocation } from "react-router-dom";

const NavList = () => {
  const { setCategory, navigate, setPages, setActiveItem, activeItem } =
    useContext(CustomContext);
  const { pathname } = useLocation();
  const [hiddenItems, setHiddenItems] = useState([]);

  useEffect(() => {
    // При монтировании компонента определяем, какие элементы нужно скрыть
    const navList = document.getElementById("navList");
    const liItems = Array.from(navList.querySelectorAll("li"));

    const hiddenItemsList = liItems.filter(
      (li) => li.offsetWidth > navList.offsetWidth
    );
    setHiddenItems(hiddenItemsList);
  }, []);

  const getCategory = (event) => {
    if (
      event.target.localName === "li" &&
      !hiddenItems.includes(event.target)
    ) {
      const newCategory = event.target.textContent;
      setCategory(newCategory === "Акция" ? "" : newCategory);
      pathname === "/catalog" ? null : navigate("/catalog");
      setPages(1);
      setActiveItem(newCategory);
    }
  };

  return (
    <div className="nav">
      <ul id="navList" className="nav-list" onClick={getCategory}>
        <li
          className={`nav-list-kitchen ${
            activeItem === "Кухни" ? "active" : ""
          }`}
        >
          Кухни
        </li>
        <li
          className={`nav-list-bedroom ${
            activeItem === "Спальни" ? "active" : ""
          }`}
        >
          Спальни
        </li>
        <li
          className={`nav-list-livingRoom ${
            activeItem === "Гостиные" ? "active" : ""
          }`}
        >
          Гостиные
        </li>
        <li
          className={`nav-list-hallway ${
            activeItem === "Прихожие" ? "active" : ""
          }`}
        >
          Прихожие
        </li>
        <li
          className={`nav-list-office ${
            activeItem === "Офисная мебель" ? "active" : ""
          }`}
        >
          Офисная мебель
        </li>
        <li
          className={`nav-list-childrensRoom ${
            activeItem === "Детские" ? "active" : ""
          }`}
        >
          Детские
        </li>
        <li
          className={`nav-list-sale ${activeItem === "Акция" ? "active" : ""}`}
        >
          Акция
        </li>
      </ul>
    </div>
  );
};

export default NavList;
