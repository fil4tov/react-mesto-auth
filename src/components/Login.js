import React from 'react';
import {Link} from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import {usePopup} from "../hooks";
import {AuthContext} from "../contexts";
import {appRoutes} from "../utils/consts";
import Loader from "./Loader";
import AuthForm from "./AuthForm";


const Login = () => {
  const {login, isLoading} = React.useContext(AuthContext)
  const [successful, setSuccessful] = React.useState(false);
  const toolTip = usePopup({initialIsOpen: false})

  const handleLogin = ({email, password}) => {
    login({email, password})
      .catch(() => {
        toolTip.open()
        setSuccessful(false)
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
        successful={successful}
        failText='Что-то пошло не так! Попробуйте ещё раз.'
      />

      <Loader isLoading={isLoading}/>
    </>
  );
};

export default Login;