import React from 'react';
import {Link} from "react-router-dom";
import {appRoutes} from "../utils/consts";
import Loader from "./Loader";
import AuthForm from "./AuthForm";
import {AuthContext} from "../contexts";

const Register = ({onError, onSuccess}) => {
  const {register, isLoading} = React.useContext(AuthContext)

  const handleSubmit = ({email, password}) => {
    register(({email, password}))
      .then(onSuccess)
      .catch(onError)
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

      <Loader isLoading={isLoading}/>
    </>
  );
};

export default Register;