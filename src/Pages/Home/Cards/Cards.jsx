import Card from "../../../Component/Card/Card";
import HitSale from "../../../Component/HitSale/HitSale";
import { Fragment, useContext, useEffect } from "react";
import { CustomContext } from "../../../utils/Context/Context";

const Cards = () => {
  const { getHitSale, hitSale } = useContext(CustomContext);

  useEffect(() => {
    getHitSale();
  }, []);

  return (<></>
   
  );
};

export default Cards;
