import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./style/main.scss";
// import Loyout from "./Component/Loyout/Loyout";
// import Home from "./Pages/Home/Home";
// import About from "./Pages/About/About";
// import NotFound from "./Pages/NotFound/NotFound";
// import Catalog from "./Pages/Catalog/Catalog";
// import Checkout from "./Pages/Checkout/Checkout";
// import PersonRoom from "./Pages/PersonRoom/PersonRoom";
// import CardProduct from "./Pages/CardProduct/CardProduct";
// import Register from "./Pages/Register/Register";
// import Login from "./Pages/Login/Login";
// import Favorites from "./Pages/Favorites/Favorites";
// import Cart from "./Pages/Cart/Cart";

const Loyout = lazy(() => import("./Component/Loyout/Loyout"));
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));
const Catalog = lazy(() => import("./Pages/Catalog/Catalog"));
const Checkout = lazy(() => import("./Pages/Checkout/Checkout"));
const PersonRoom = lazy(() => import("./Pages/PersonRoom/PersonRoom"));
const CardProduct = lazy(() => import("./Pages/CardProduct/CardProduct"));
const Register = lazy(() => import("./Pages/Register/Register"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Favorites = lazy(() => import("./Pages/Favorites/Favorites"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loding</p>}>
              <Loyout />{" "}
            </Suspense>
          }
        >
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<CardProduct />} />
          <Route path="/room" element={<PersonRoom />} />
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
