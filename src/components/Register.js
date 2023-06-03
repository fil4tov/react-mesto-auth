import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import Loader from "./Loader";
import AuthForm from "./AuthForm";
import {useTooltip} from "../hooks";
import {appRoutes} from "../utils/consts";
import {AuthContext} from "../contexts";

const Register = () => {
  const {register, isLoading} = React.useContext(AuthContext)
  const toolTip = useTooltip({initialIsOpen: false})
  const [navigatePathOnClose, setNavigatePathOnClose] = React.useState('');
  const navigate = useNavigate()

  const handleSubmit = ({email, password}) => {
    register(({email, password}))
      .then(() => {
        toolTip.open()
        toolTip.setSuccessful(true)
        toolTip.setText('Вы успешно зарегистрировались!')
        setNavigatePathOnClose(appRoutes.signIn.path)
      })
      .catch(() => {
        toolTip.open()
        toolTip.setSuccessful(false)
        toolTip.setText('Вы ввели некорректный email или такой пользователь уже существует.')
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
        successful={toolTip.successful}
        text={toolTip.text}
      />

      <Loader isLoading={isLoading}/>
    </>
  );
};

export default Register;