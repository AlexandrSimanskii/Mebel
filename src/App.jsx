import { Route, Routes } from "react-router-dom";
import "./style/main.scss";
import Loyout from "./Component/Loyout/Loyout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import Catalog from "./Pages/Catalog/Catalog";
import PersonAccount from "./Pages/PersonAccount/PersonAccount";
import CardProduct from "./Pages/CardProduct/CardProduct";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cardProduct" element={<CardProduct />} />
          <Route path="/account" element={<PersonAccount />} />{" "}
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
