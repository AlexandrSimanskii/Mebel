import { useState } from "react";

const ProductInfo = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  const handleColorChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedColor(selectedValue);
    console.log(selectedColor);
  };
  return (
    <div>
      <h3>Динс Velvet Yellow</h3>
      <p>Диваны</p>
      <div className="pay-group">
        <p>244P</p>
        <button>Купить</button>
        <p>Добавить в желаемое</p>
      </div>
      <form action=""></form>
    </div>
  );
};

export default ProductInfo;
