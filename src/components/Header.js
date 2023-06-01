import React from 'react';
import headerLogo from '../assets/images/logo.svg'
import {Link, useLocation} from "react-router-dom";
import {AuthContext} from "../contexts";
import {classNames} from "../utils/helpers";
import {appRoutes} from "../utils/consts";
import {MenuIcon, CloseIcon} from "./ui/Icons";

const Header = () => {
  const [linkPath, setLinkPath] = React.useState('');
  const [linkText, setLinkText] = React.useState('');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {user, isAuth, handleLogout} = React.useContext(AuthContext)
  const location = useLocation()

  const isMenuVisible = isMenuOpen && isAuth

  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

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
    <header className={classNames(['header'], {
      ['header_menu-opened']: isMenuVisible
    })}>

      <img src={headerLogo} alt="Логотип сайта" className="logo"/>

      {isAuth
        ? <>
          <div className='header__user-info'>
            <p className='header__email'>{user.email}</p>
            <button
              onClick={handleLogout}
              className='button header__button'
            >
              Выйти
            </button>
          </div>

          {isMenuOpen
            ? <CloseIcon onClick={handleToggleMenu} className='header__icon'/>
            : <MenuIcon onClick={handleToggleMenu} className='header__icon'/>}
        </>
        : <Link className='header__link' to={linkPath}>{linkText}</Link>}
    </header>
  );
};

export default Header;