import { useContext } from "react";
import { CustomContext } from "../../utils/Context/Context";
import { useLocation } from "react-router-dom";

const NavList = () => {
  
const {setCategory,navigate,setPages,setActiveItem,activeItem}=useContext(CustomContext)
const { pathname } = useLocation();


const getCategory = (event) => {
    if (event.target.localName === "li") {
      const newCategory = event.target.textContent;
      setCategory(newCategory == "Акция" ? "": newCategory);
      pathname == "/catalog" ? null : navigate("/catalog");
      setPages(1)

      setActiveItem(newCategory);
    }
  };

    return (
        <ul className="nav-list" onClick={getCategory}>
        <li className={`nav-list-kitchen ${activeItem === "Кухни" ? "active" : ""}`}>Кухни</li>
        <li className={`nav-list-kitchen ${activeItem === "Спальни" ? "active" : ""}`}>Спальни</li>
        <li className={`nav-list-kitchen ${activeItem === "Гостиные" ? "active" : ""}`}>Гостиные</li>
        <li className={`nav-list-kitchen ${activeItem === "Прихожие" ? "active" : ""}`}>Прихожие</li>
        <li className={`nav-list-kitchen ${activeItem === "Офисная мебель" ? "active" : ""}`}>Офисная мебель</li>
        <li className={`nav-list-kitchen ${activeItem === "Детские" ? "active" : ""}`}>Детские</li>
        <li className={`nav-list-kitchen ${activeItem === "Акция" ? "active" : ""}`}>Акция</li>
      </ul>
    );
};

export default NavList;