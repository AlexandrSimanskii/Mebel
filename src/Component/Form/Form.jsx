import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="register">
      <div className="register__left">
        <h2>Sign in</h2>
        <p>
          Если у вас нет аккаунта вы
          <br /> можете зарегестрироваться
          <Link to={"register"}>
            <span> здесь !</span>
          </Link>
        </p>

        <form className="form" action="submit">
          <label htmlFor="email">Email</label>
          <div className=" form__box-field form__box-field_email">
            <input
              id="email"
              className="form-field"
              type="email"
              placeholder="Ввидите свой Email"
            />
          </div>
          <label htmlFor="username">Username</label>
          <div className=" form__box-field form__box-field_username">
            <input
              id="username"
              className="form-field"
              type="email"
              placeholder="Ввидите своe имя"
            />
          </div>
          <label htmlFor="password">Password</label>
          <div className=" form__box-field form__box-field_password">
            <input
              id="password"
              className="form-field"
              type="email"
              placeholder="Ввидите пароль"
            />
          </div>
          <label htmlFor="confirmPassword">ConfirmPassword</label>
          <div className=" form__box-field form__box-field_password">
            <input
              id="confirmPassword"
              className="form-field"
              type="email"
              placeholder="Подтвердите пароль "
            />
          </div>
          <input className="form-button" type="button" value={"Войти"} />
        </form>
      </div>
      <div className="register__right">
        <img
          src="../../../public/images/image/Rectangle 11.png"
          alt="sign in"
        />
        <h3>Sign in to name</h3>
      </div>
    </div>
  );
};

export default Form;
