import React from 'react';
import {Link} from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import Loader from "./Loader";
import AuthForm from "./AuthForm";
import {useTooltip} from "../hooks";
import {AuthContext} from "../contexts";
import {appRoutes} from "../utils/consts";


const Login = () => {
  const {login, isLoading} = React.useContext(AuthContext)
  const toolTip = useTooltip({initialIsOpen: false})

  const handleLogin = ({email, password}) => {
    login({email, password})
      .catch(() => {
        toolTip.open()
        toolTip.setSuccessful(false)
        toolTip.setText('Что-то пошло не так! Попробуйте ещё раз.')
      })
  }


  return (
    <>
      <AuthForm
        onSubmit={handleLogin}
        title='Вход'
        buttonText='Войти'
      >
        <Link className='form__link' to={appRoutes.signUp.path}>
          Нет аккаунта? Зарегистрироваться
        </Link>
      </AuthForm>

      <InfoTooltip
        isOpen={toolTip.isOpen}
        onClose={toolTip.close}
        successful={toolTip.successful}
        text={toolTip.text}
      />

      <Loader isLoading={isLoading}/>
    </>
  );
};

export default Login;