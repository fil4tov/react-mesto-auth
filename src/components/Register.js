import React from 'react';
import md5 from 'md5'
import {Link, useNavigate} from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import {ButtonSubmit, Input} from "./ui";
import {usePopup, useSubmitButton, useValidation} from "../hooks";
import {AuthService} from "../api/AuthService";
import {appRoutes} from "../utils/consts";

const Register = () => {
  const email = useValidation('')
  const password = useValidation('')
  const [successful, setSuccessful] = React.useState(false);
  const [navigatePathOnClose, setNavigatePathOnClose] = React.useState('');
  const toolTip = usePopup({initialIsOpen: false})
  const navigate = useNavigate()
  const {isSubmitDisabled} = useSubmitButton({
    inputsValidity: [email.isValid, password.isValid]
  })

  const handleSubmit = e => {
    e.preventDefault()
    AuthService.register({
      email: email.value,
      password: md5(password.value)
    })
      .then(() => {
        toolTip.open()
        setSuccessful(true)
        setNavigatePathOnClose(appRoutes.signIn.path)
      })
      .catch(() => {
        toolTip.open()
        setSuccessful(false)
        setNavigatePathOnClose(appRoutes.signUp.path)
      })
  }

  const handleCloseTooltip = () => {
    toolTip.close()
    navigate(navigatePathOnClose)
  }

  React.useEffect(() => {
    email.ref.current.focus()
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form"
        autoComplete="off"
      >
        <h2 className="form__title form__title_inverted">Регистрация</h2>

        <Input
          value={email.value}
          onChange={email.onChange}
          ref={email.ref}
          error={Boolean(email.error)}
          errorMessage={email.error}
          inverted
          type="email"
          placeholder="Email"
          required
        />

        <Input
          value={password.value}
          onChange={password.onChange}
          ref={password.ref}
          error={Boolean(password.error)}
          errorMessage={password.error}
          type="password"
          placeholder="Пароль"
          minLength="6"
          maxLength="20"
          inverted
          required
        />

        <ButtonSubmit
          disabled={isSubmitDisabled}
          className='form__submit'
          inverted
          type="submit"
          aria-label='Зарегистрироваться'
        >
          Зарегистрироваться
        </ButtonSubmit>

        <Link className='form__link' to={appRoutes.signIn.path}>
          Уже зарегистрированы? Войти
        </Link>

      </form>

      <InfoTooltip
        isOpen={toolTip.isOpen}
        onClose={handleCloseTooltip}
        successful={successful}
        successText='Вы успешно зарегистрировались!'
        failText='Вы ввели некорректный email или такой пользователь уже существует.'
      />
    </>
  );
};

export default Register;