import Card from "../../../Component/Card/Card";
import { Fragment, useContext, useEffect } from "react";
import { CustomContext } from "../../../utils/Context/Context";

const Cards = () => {
  const { getHitSale, hitSale } = useContext(CustomContext);

  useEffect(() => {
    getHitSale();
  }, []);

  return (
    <div className="cards">
      <div className="container">
        <h2>Хиты продаж</h2>
        <div className="cards__wrapper">
          {hitSale.map((item) => {
           return <Fragment key={item.id}>
              <Card item={item}  />
            </Fragment>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
