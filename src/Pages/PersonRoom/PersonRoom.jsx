import { useContext, useEffect, useState, Fragment } from "react";
import { CustomContext } from "../../utils/Context/Context";
import { useForm } from "react-hook-form";
import axios from "../../utils/Axios/axios";

const PersonRoom = () => {
  const { user, setUser } = useContext(CustomContext);
  const [orders, setOrders] = useState([]);
  const [pop, setPop] = useState(false);
  const getAllOrders = () => {
    let order = user?.orders?.map((item) => item.order).flat();
    return order;
  };

  useEffect(() => {
    setOrders(getAllOrders());
  }, [user]);

  // const { register, handleSubmit } = useForm();

  // const onSubmit = (data) => {
  //   axios
  //     .patch(`users/${user.id}`, {
  //       username: data.firstName,

  //       secondName: data.secondName,
  //       number: data.number,
  //       city: data.city,
  //       street: data.street,
  //       home: data.home,
  //       flat: data.flat,
  //     })
  //     .then((res) => {
  //       setUser(res.data);
  //       localStorage.setItem("user", JSON.stringify(res.data));
  //     });
  // };

  return (
    <section className="room">
      <div className="container">
        <div className="room__inner">
          <ul className="room__bonus">
            <h4>Бонусная программа</h4>
            <li className="room__bonus_list">
              <p>У выс {0} бонусных баллов</p>
              <a>Правила бонусной программы</a>
            </li>
          </ul>
          <ul className="program__conditions">
            <li className="program__conditions_cashback">
              Возвращаем до 7% на бонусный счет
            </li>
            <li className="program__conditions_rub">1 бонус = 1 рубль</li>
            <li className="program__conditions_present">
              Оплачивайте бонусами до 20% от покупки
            </li>
          </ul>
          <div className="room__bottom">
            {/* <form
              className="room__bottom_form"
              action="submit"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h4>Личные данные</h4>
              <fieldset className="form__group_first">
                <label>
                  Имя <input type="text" {...register("firstName")} />
                </label>

                <label>
                  Фамилия <input type="text" {...register("secondName")} />
                </label>
                <label>
                  Номер телефона{" "}
                  <input
                    type="tel"
                    {...register("number")}
                    defaultValue={user.number}
                  />
                </label>
              </fieldset>

              <fieldset className="form__group_second ">
                <label>
                  Город <input type="text" {...register("city")} />
                </label>
                <label>
                  Улица <input type="text" {...register("street")} />
                </label>
              </fieldset>
              <fieldset className="form__group_third">
                <label>
                  Дом/Корпус <input type="text" {...register("home")} />
                </label>
                <label>
                  Квартира <input type="text" {...register("flat")} />
                </label>
              </fieldset>

              <button type="submit">Изменить</button>
            </form> */}

            <table>
              <caption>Мои заказы</caption>
              <thead>
                <tr>
                  <td>Товар</td>
                  <td>Цена</td>
                  <td>Количество</td>
                  <td>Дата</td>
                </tr>
              </thead>
              <tbody>
                {orders?.map((item) => {
                  return (
                    <Fragment key={item.id}>
                      <tr>
                        <td>
                          <img src={item.image} alt="" />
                        </td>

                        <td>{item.price} руб</td>
                        <td>{item.count} </td>
                        <td>{item.data}</td>
                      </tr>
                    </Fragment>
                  );
                })}
                {/* <tr>
                  <td>
                    <img src={orders && orders[0]?.image} alt="" />
                  </td>
                  <td>{orders && orders[0]?.price} руб</td>
                  <td>{orders && orders[0]?.count} </td>
                  <td>{user?.orders?.[0].date}</td>
                </tr> */}
              </tbody>
            </table>
          </div>
          {pop ? (
            <div className="popup">
              <img src="../../../public/images/image/bonus.jpg" alt="" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default PersonRoom;
