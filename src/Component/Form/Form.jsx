import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onBlur" });

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

        <form noValidate className="form" action="submit">
          <label htmlFor="email">Email</label>
          <div className=" form__box-field form__box-field_email">
            <input
              {...register("email", {
                required: {
                  message: "Email обязателен к заполнению",
                  value: true,
                },
                minLength: {
                  message: "Минимум 8 символов",
                  value: true,
                },
                pattern: {
                  message: "Напишите корректный Email",
                  value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                },
              })}
              id="email"
              className="form-field"
              type="email"
              placeholder="Ввидите свой Email"
            />
          </div>
          <p className="register__label-error">{errors.email?.message}</p>

          <label htmlFor="number">TEL</label>
          <div className=" form__box-field form__box-field_password">
            <InputMask
              mask={`+\\7\\(\\999)-999-99-99`}
              {...register("number", {
                required: {
                  message: "Обязательно к заполнению",
                  value: true,
                },
                minLength: {
                  message: "Минимум 11 символов",
                  value: 14,
                },
                pattern: {
                  message: "Введите все цифры",
                  value: /^\+7\(9\d{2}\)-\d{3}-\d{2}-\d{2}$/,
                },
              })}
              id="number"
              className="form-field"
              type="tel"
              placeholder="Введите номер телефона"
            />
          </div>
          <p className="register__label-error">{errors.number?.message}</p>
          <label htmlFor="username">Username</label>
          <div className=" form__box-field form__box-field_username">
            <input
              {...register("username", {
                required: {
                  message: "Имя обязательно к заполнению",
                  value: true,
                },
                minLength: {
                  message: "Минимум 3 символа",
                  value: 3,
                },
                pattern: {
                  message: "Используйте только буквы",
                  value: /([a-zA-Z]+|[а-яА-Я])+/,
                },
              })}
              id="username"
              className="form-field"
              type="text"
              placeholder="Ввидите своe имя"
            />
          </div>
          <p className="register__label-error">{errors.username?.message}</p>
          <label htmlFor="password">Password</label>
          <div className=" form__box-field form__box-field_password">
            <input
              {...register("password", {
                required: {
                  message: "Обязательно к заполнению",
                  value: true,
                },
                minLength: {
                  message: "Минимум 8 символов",
                  value: 8,
                },
                pattern: {
                  message:
                    "Пароль обязательно должен содержать цифры,спецсимволы,буквы верхнего и нижнего региста",
                  value:
                    /(?=.*[0-9])(?=.*[!@#$%^&*.,])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]g/,
                },
              })}
              id="password"
              className="form-field"
              type="text"
              placeholder="Ввидите пароль"
            />
          </div>
          <p className="register__label-error">{errors.password?.message}</p>
           <label htmlFor="confirmPassword">ConfirmPassword</label>
          <div className=" form__box-field form__box-field_password">
            <input
              {...register("confirmPassword", {
                required: {
                  message: "Обязательно к заполнению",
                  value: true,
                },
                minLength: {
                  message: "Минимум 8 символов",
                  value: 8,
                },
                pattern: {
                  message:
                    "Пароль обязательно должен содержать цифры,спецсимволы,буквы верхнего и нижнего региста",
                  value:
                    /(?=.*[0-9])(?=.*[!@#$%^&*.,])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]g/,
                },
              })}
              id="confirmPassword"
              className="form-field"
              type="password"
              placeholder="Подтвердите пароль "
            />
          </div>
          <p className="register__label-error">
            {errors.confirmPassword?.confirmPassword}
          </p>
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
