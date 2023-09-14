import axios from "../../utils/Axios/axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const CustomContext = createContext();

const Context = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pages, setPages] = useState(1);
  const [user, setUser] = useState({ Email: "" });
  const [hitSale, setHitSale] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  // startUserContent
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    if (localStorage.getItem("favorites") !== null) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")));
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

  // Получить продукты с наибольшей скидкой
  const getHitSale = () => {
    axios
      .get("/products?_sort=sale&_order=desc&_limit=12")
      .then((res) => setHitSale(res.data))
      .catch((error) => console.log(error));
  };

  // Получить продукты-фавориты

  const favoritesHandler = (product) => {
    let findProduct = favorites.some((item) => item.id === product.id);
    if (findProduct) {
      setFavorites((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setFavorites((prev) => [...prev, product]);
    }
  };

  // Получить сегодняшнюю дату
  const getToday = () => {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

    return formattedDate;
  };

  // Added in the cart
  const addCarts = (product) => {
    axios
      .patch(`users/${user.id}`, {
        carts: [...user.carts, { ...product, count: 1, data: getToday() }],
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const addCardsCountPlus = (id) => {
    axios
      .patch(`users/${user.id}`, {
        carts: user.carts.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        }),
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const addCardsCountMinus = (id) => {
    axios
      .patch(`users/${user.id}`, {
        carts:
          user.carts.find((item) => item.id === id).count > 1
            ? user.carts.map((item) => {
                if (item.id === id) {
                  return { ...item, count: item.count - 1 };
                }
                return item;
              })
            : user.carts.filter((item) => item.id !== id),
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const addOrders = (order, setPopup, redirect) => {
    axios
      .patch(`users/${user.id}`, {
        orders: [...user.orders, order],
        carts: [],
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        setPopup(true);
        redirect();
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const value = {
    user,
    setUser,
    registerUser,
    loginUser,
    logOutUser,
    navigate,
    hitSale,
    getHitSale,
    favorites,
    favoritesHandler,
    search,
    setSearch,
    location,
    addCarts,
    addCardsCountPlus,
    addCardsCountMinus,
    addOrders,
    category,
    setCategory,
    products,
    setProducts,
    pages,
    setPages,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};

export default Context;
