import { useParams } from "react-router-dom";
import HitSale from "../../Component/HitSale/HitSale";
import ProductInfo from "../../Component/ProductInfo/ProductInfo";
import ProductSlider from "../../Component/ProductSlider/ProductSlider";

import { useEffect, useState } from "react";
import axios from "../../utils/Axios/axios";

const CardProduct = () => {
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await axios
          .get(`/products/${params.id}`)
          .then((res) => setProduct(res.data));
      } catch {
        console.log("erorr fetchProduct");
      }
    };
    fetchProduct();
  }, [params.id]);



 




  if ("id" in product) {
    return (
      <>
        <div className="cardProduct">
          <div className="container">
            <div className="cardProduct__inner">
              <div className="cardProduct__purches">
                <ProductSlider product={product} />

                <ProductInfo product={product} />
              </div>
              <div className="cardProduct__info"></div>
            </div>
          </div>
        </div>
        <HitSale />
      </>
    );
  } else {
  return <h2>loading</h2>}
};

export default CardProduct;
