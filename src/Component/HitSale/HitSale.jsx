import { useContext, useEffect, Fragment } from "react";
import { CustomContext } from "../../utils/Context/Context";
import Card from "../Card/Card";
import AsideFilter from "../AsideFilter/AsideFilter";
import SelectFilter from "../SelectFilter/SelectFilter";

const HitSale = () => {

  const { hitSale, getHitSale } = useContext(CustomContext);
  useEffect(() => {
    getHitSale();
  }, []);




  

  return (
    <>
      <div className="cards">
        <div className="container">
          <h2>Хиты продаж</h2>
          <div className="cards__wrapper">
      
            {hitSale.map((item) => {
              return (
                
                 
               
                  <Fragment key={item.id}>
                    <Card item={item} />
                  </Fragment>
               
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HitSale;
