const Cart = (item) => {
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__inner">
          <div className="cart__top">
            <div className="cart__top-title">Ваша корзина</div>
            <div className="cart__top-position">4 позиции</div>
          </div>
          <div className="cart__card">
            <img src="../../../public/images/image/avilion-1.png" alt="" />
            <div className="cart__card-content">
              <div className="cart__card-top">
                <h4>Вилли Pink</h4>
                {item.sale > 0 ? (
                  <>
                    <img
                      src="../../../../public/images/icons/sale-red.svg"
                      alt="sale"
                    />
                    <p>{item.sale} %</p>
                  </>
                ) : (
                  ""
                )}
                <p className="main-sale">37 990₽</p>
                <h5>16666 р</h5>
              </div>
              <dl className="cart__card-inform">
                <div>
                  <dt>Цвет:</dt>
                  <dd>Бежевый</dd>
                  <div style={{ background: "red" }}></div>
                </div>
                <div>
                  <dt>Количество:</dt>
                  <dd>1</dd>
                </div>
                <div>
                  <dt>Размер(Ш×Д×В):</dt>
                  <dd>218 × 43 × 32</dd>
                </div>
              </dl>
            </div>
            <div className="cart__card-delete" ><span>+</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
