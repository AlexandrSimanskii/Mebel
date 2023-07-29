import { useState } from "react";

const ProductInfo = () => {
  const [selectedColor, setSelectedColor] = useState("red");
  const [sizeVisible, setSizeVisible] = useState(false);
  const [color, setColor] = useState("red");
  const handleColorChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedColor(selectedValue);
    console.log(selectedColor);
  };
  return (
    <div className="purches__inform">
      <h3>Динс Velvet Yellow</h3>
      <p className="purches__inform-category">Диваны</p>
      <div className="payGroup">
        <p className="payGroup-price">4 690₽</p>
        <button>Купить</button>
        <p className="payGroup-favorite">Добавить в желаемое</p>
      </div>
      <div className="chengeParamets">
        <div className="selectColor">
          <div style={{ background: color }} className="selectColor-color"></div>
          <img
            onClick={() => setSizeVisible((prev) => !prev)}
            className="selectColor-img"
            src="../../../public/images/image/Tick.svg"
            alt=""
          />
        </div>
        <ul className={sizeVisible ? "option" : "option displayNone"}>
          <li onClick={()=>setColor("blue")} className="option__color option__color-blue"></li>
          <li onClick={()=>setColor("green")} className="option__color option__color-green"></li>
          <li onClick={()=>setColor("black")} className="option__color option__color-black"></li>
         
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
