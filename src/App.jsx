import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./style/main.scss";
import Loyout from "./Component/Loyout/Loyout";
// import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import Catalog from "./Pages/Catalog/Catalog";
import Checkout from "./Pages/Checkout/Checkout";
import PersonRoom from "./Pages/PersonRoom/PersonRoom";
import CardProduct from "./Pages/CardProduct/CardProduct";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Favorites from "./Pages/Favorites/Favorites";
import Cart from "./Pages/Cart/Cart";

const Home = lazy(() => import("./Pages/Home/Home"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<CardProduct />} />
          <Route path="/room" element={<PersonRoom />} />
          <Route
            path=""
            element={
              <Suspense fallback={<p>Loding</p>}>
                <Home />
              </Suspense>
            }
          />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
