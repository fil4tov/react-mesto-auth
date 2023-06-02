import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import {usePopup} from "../hooks";
import {appRoutes} from "../utils/consts";
import Loader from "./Loader";
import AuthForm from "./AuthForm";
import {AuthContext} from "../contexts";

const Register = () => {
  const {register, isLoading} = React.useContext(AuthContext)
  const [successful, setSuccessful] = React.useState(false);
  const toolTip = usePopup({initialIsOpen: false})
  const [navigatePathOnClose, setNavigatePathOnClose] = React.useState('');
  const navigate = useNavigate()

  const handleSubmit = ({email, password}) => {
    register(({email, password}))
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

  return (
    <>
      <AuthForm
        onSubmit={handleSubmit}
        title='Регистрация'
        buttonText='Зарегистрироваться'
        hasValidation
      >
        <Link className='form__link' to={appRoutes.signIn.path}>
          Уже зарегистрированы? Войти
        </Link>
      </AuthForm>

      <InfoTooltip
        isOpen={toolTip.isOpen}
        onClose={handleCloseTooltip}
        successful={successful}
        successText='Вы успешно зарегистрировались!'
        failText='Вы ввели некорректный email или такой пользователь уже существует.'
      />

      <Loader isLoading={isLoading}/>
    </>
  );
};

export default Register;