import axios from "../../utils/Axios/axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const CustomContext = createContext();

const Context = (props) => {
  const location = useLocation()
  const navigate = useNavigate();
  const [user, setUser] = useState({ Email: "" });
  const [hitSale, setHitSale] = useState([]);
  const [favorites, setFavorites] = useState([]);
const[search,setSearch]=useState("")
  // startUserContent
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    if(localStorage.getItem("favorites")!==null){
    
      setFavorites(JSON.parse(localStorage.getItem("favorites")) )}
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
  let findProduct = favorites.some((item)=>item.id===product.id)
  if(findProduct){
    setFavorites((prev)=>prev.filter((item)=>item.id!==product.id))
  }else{
    setFavorites((prev)=>[...prev,product])
  }
 
  };

  useEffect(()=>{
    localStorage.setItem("favorites",JSON.stringify(favorites))
  },[favorites])

  const value = {
    user,
    registerUser,
    loginUser,
    logOutUser,
    navigate,
    hitSale,
    getHitSale,
    favorites,favoritesHandler,search,setSearch,location
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};

export default Context;
