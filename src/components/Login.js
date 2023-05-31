import React from 'react';
import {Link} from "react-router-dom";
import md5 from 'md5'
import InfoTooltip from "./InfoTooltip";
import {ButtonSubmit, Input} from "./ui";
import {usePopup} from "../hooks";
import {AuthContext} from "../contexts";
import {AuthService} from "../api/AuthService";
import {appRoutes} from "../utils/consts";
import Loader from "./Loader";


const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [successful, setSuccessful] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const {handleLogin} = React.useContext(AuthContext)
  const toolTip = usePopup({initialIsOpen: false})
  const inputRef = React.useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    AuthService.login({email, password: md5(password)})
      .then(({token}) => {
        handleLogin(token)
      })
      .catch(() => {
        toolTip.open()
        setSuccessful(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  React.useEffect(() => {
    inputRef.current.focus()
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <h2 className="form__title form__title_inverted">Вход</h2>

        <Input
          ref={inputRef}
          value={email}
          onChange={e => setEmail(e.target.value)}
          inverted
          type="email"
          placeholder="Email"
          required
        />

        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          inverted
          type="password"
          placeholder="Пароль"
          required
        />

        <ButtonSubmit
          className='form__submit'
          inverted
          type="submit"
          aria-label='Войти'
        >
          Войти
        </ButtonSubmit>

        <Link className='form__link' to={appRoutes.signUp.path}>
          Нет аккаунта? Зарегистрироваться
        </Link>
      </form>

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