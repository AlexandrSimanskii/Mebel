import axios from "../../utils/Axios/axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CustomContext = createContext();

const Context = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ Email: "" });
  const [hitSale, setHitSale] = useState([]);

  // startUserContent
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  //Регистрация
  const registerUser = (user) => {
    axios
      .post("/register", user)
      .then((res) => {
        setUser(res.data.user);

        navigate("/");
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => console.log(error));
  };

  //Войти в профиль
  const loginUser = (user) => {
    axios
      .post("/signin", {
        ...user,
      })
      .then((res) => {
        setUser(res.data.user);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(res.data.user));
      });
  };

  // Выйти из профиля
  const logOutUser = () => {
    localStorage.removeItem("user");
    setUser({ Email: "" });
  };

  const getHitSale = () => {
    axios
      .get("/products?_sort=sale&_order=desc&_limit=12")
      .then((res) => setHitSale(res.data))
      .catch((error) => console.log(error));
  };

  const value = {
    user,
    registerUser,
    loginUser,
    logOutUser,
    navigate,
    hitSale,
    getHitSale,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};

export default Context;
