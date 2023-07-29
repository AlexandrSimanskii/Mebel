import ProductInfo from "../../Component/ProductInfo/ProductInfo";
import ProductSlider from "../../Component/ProductSlider/ProductSlider";

const CardProduct = () => {
  return (
    <div className="cardProduct">
      <div className="container">
        <div className="cardProduct__inner">
          <div className="cardProduct__purches">
        
        
              <ProductSlider />
           
            <ProductInfo/>
       
          </div>
          <div className="cardProduct__info"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
