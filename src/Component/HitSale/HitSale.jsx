import { useContext, useEffect } from "react";
import { CustomContext } from "../../utils/Context/Context";

const HitSale = () => {
    
  const { hitSale, getHitSale } = useContext(CustomContext);
  useEffect(() => {
    getHitSale();
  }, []);
  return <></>;
};

export default HitSale;
