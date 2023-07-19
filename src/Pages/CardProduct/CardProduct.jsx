
import ProductInfo from "../../Component/ProductInfo/ProductInfo";
import ProductSlider from "../../Component/ProductSlider/ProductSlider";

const CardProduct = () => {


  return (
    <div className="cardProduct">
      <div className="container">
        <div className="cardProduct__inner">
          <ProductSlider/>
       <ProductInfo/>
          <div className="inner-description"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
