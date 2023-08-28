import { useContext, useState } from "react";
import { CustomContext } from "../../utils/Context/Context";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const { user, addOrder } = useContext(CustomContext);
  const [payCard, setPayCard] = useState(true);
  const [payCash, setPayCash] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout__inner">
          <div className="user__inform">
            <form action="submit" onSubmit={handleSubmit(submitForm)}>
              <div className="form__field">
                <h5>Данные покупателя</h5>
                <input
                  {...register("name")}
                  defaultValue={user.username}
                  placeholder="Имя"
                  type="text"
                />
                <input
                  {...register("email")}
                  defaultValue={user.email}
                  placeholder="Email"
                  type="email"
                />
                <input
                  {...register("number")}
                  defaultValue={user.number}
                  placeholder="Телефон"
                  type="phone"
                />
              </div>
              <div className="form__field">
                <h5>Адресс покупателя</h5>
                <input
                  {...register("country")}
                  placeholder="Страна"
                  type="text"
                />
                <input {...register("city")} placeholder="Город" type="text" />
                <input
                  {...register("street")}
                  placeholder="Улица"
                  type="text"
                />
                <input {...register("home")} placeholder="Дом" type="text" />
                <input
                  {...register("flat")}
                  placeholder="Квартира"
                  type="text"
                />
              </div>

              <div className="form__field">
                <h5>Коментарии</h5>
                <textarea
                  {...register("info")}
                  placeholder="Дополнительная информация"
                  name=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="order__inform">
            <table>
              <thead>
                <tr>
                  <th>Ваш заказ</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Товар</td>
                  <td></td>
                  <td>Количество Всего</td>
                </tr>

                {user.carts?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.count}</td>
                      <td>{item.price * item.count} руб</td>
                    </tr>
                  );
                })}

                <tr>
                  <td>Итого</td>
                  <td>
                    {user.carts?.reduce(
                      (acc, el) => acc + el.price * el.count,
                      0
                    )}
                    руб
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="checkout__payment">
              <p>Способы оплаты</p>

              {/* <div className="checkout__payment-choice">
                <label>
                  Наличные{" "}
                  <input
                    name="pay"
                    type="radio"
                    checked
                    onChange={() => {
                      setPayCard(false);
                      setPayCash(true);
                    }}
                  />
                </label>
                <label>
                  Картой{" "}
                  <input
                    name="pay"
                    type="radio"
                    onChange={() => {
                      setPayCard(true);
                      setPayCash(false);
                    }}
                  />
                </label>
              </div> */}

              <button >Разместить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
