import { Fragment, useContext } from "react";
import { CustomContext } from "../../utils/Context/Context";

const Cart = (item) => {
  const { addCardsCountPlus, addCardsCountMinus, user,navigate } =
    useContext(CustomContext);

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__inner">
          <div className="cart__top">
            <div className="cart__top-title">Ваша корзина</div>
            <div className="cart__top-position">
              {user.carts?.length} позиции
            </div>
          </div>
          {user.carts?.map((item) => (
            <Fragment key={item.id}>
              <div className="cart__card">
                <img src={item.image} alt="" />

                <div className="cart__card-content">
                  <h4>{item.title}</h4>
                  <dl className="cart__card-inform">
                    <div>
                      <dt>Размер(Ш×Д×В):</dt>
                      <dd>
                        {item.deep} × {item.width} × {item.height}
                      </dd>
                    </div>
                  </dl>{" "}
                  <div className="cart__card-delete">
                    <button onClick={() => addCardsCountPlus(item.id)}>
                      +
                    </button>
                    <span>{item.count}</span>
                    <button onClick={() => addCardsCountMinus(item.id)}>
                      -
                    </button>
                  </div>
                </div>
                <h5>Цена {item.price} р</h5>
                <h5>Сумма {item.price * item.count}</h5>
              </div>
            </Fragment>
          ))}
        </div>
        <div>
          <div className="cart__bottom">
            <p>
              Итоговая сумма{" "}
              {user.carts?.reduce(
                (acc, rec) => acc + rec.price * rec.count,
                0
              )}{" "}
              p
            </p>

            <button onClick={()=>navigate("/checkout")}>Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
