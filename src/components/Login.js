import React from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../contexts";
import {appRoutes} from "../utils/consts";
import Loader from "./Loader";
import AuthForm from "./AuthForm";


const Login = ({onError}) => {
  const {login, isLoading} = React.useContext(AuthContext)

  const handleLogin = ({email, password}) => {
    login({email, password})
      .catch(onError)
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

      <Loader isLoading={isLoading}/>
    </>
  );
};

export default Login;