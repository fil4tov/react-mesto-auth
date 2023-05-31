import React from 'react';
import headerLogo from '../assets/images/logo.svg'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../contexts";
import {classNames, unsetJWT} from "../utils/helpers";
import {appRoutes} from "../utils/consts";
import {MenuIcon, CloseIcon} from "./ui/Icons";

const Header = () => {
  const [linkPath, setLinkPath] = React.useState('');
  const [linkText, setLinkText] = React.useState('');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {isAuth} = React.useContext(AuthContext)
  const location = useLocation()

  React.useEffect(() => {
    switch (location.pathname) {
      case appRoutes.signIn.path:
        setLinkPath(appRoutes.signUp.path)
        setLinkText(appRoutes.signUp.label)
        break
      case appRoutes.signUp.path:
        setLinkPath(appRoutes.signIn.path)
        setLinkText(appRoutes.signIn.label)
        break
    }
  }, [location.pathname]);

  return (
    <>
      {isMenuOpen && <HeaderUserInfo className='header__user-info_mobile'/>}
      <header className="header">
        <a href={appRoutes.home.path}>
          <img src={headerLogo} alt="Логотип сайта" className="logo"/>
        </a>

        {isAuth
          ? <>
            <HeaderUserInfo/>
            {isMenuOpen
              ? <CloseIcon onClick={() => setIsMenuOpen(false)} className='header__icon'/>
              : <MenuIcon onClick={() => setIsMenuOpen(true)} className='header__icon'/>}
          </>
          : <Link className='header__link' to={linkPath}>{linkText}</Link>}

      </header>
    </>
  );
};

const HeaderUserInfo = ({className}) => {
  const {user, setUser, setIsAuth} = React.useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    unsetJWT()
    setUser({})
    setIsAuth(false)
    navigate(appRoutes.signIn.path)
  }

  return (
    <div className={classNames(['header__user-info', className])}>
      <p className='header__email'>{user.email}</p>
      <button
        onClick={handleLogout}
        className='button header__button'
      >
        Выйти
      </button>
    </div>
  )
}

export default Header;