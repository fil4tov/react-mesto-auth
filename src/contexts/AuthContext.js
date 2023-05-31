import React from "react";
import {getJWT, setJWT, unsetJWT} from "../utils/helpers";
import {AuthService} from "../api/AuthService";

export const AuthContext = React.createContext({})

export const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const hasUserData = React.useRef(false)

  React.useEffect(() => {
    if (getJWT() && !hasUserData.current) {
      AuthService.checkAuth()
        .then(({data}) => {
          handleCheckAuth(data)
        })
        .catch(console.log)
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsLoading(false)
    }
  }, [isAuth]);

  const handleLogout = () => {
    unsetJWT()
    setUser({})
    setIsAuth(false)
    hasUserData.current = false
  }

  const handleLogin = (jwt) => {
    setJWT(jwt)
    setIsAuth(true)
  }

  const handleCheckAuth = (userData) => {
    setUser(userData)
    setIsAuth(true)
    hasUserData.current = true
  }

  const store = React.useMemo(() => {
    return {
      user,
      isAuth,
      isLoading,
      handleLogout,
      handleLogin
    }
  }, [user, isAuth, isLoading])

  return (
    <AuthContext.Provider value={store}>
      {children}
    </AuthContext.Provider>
  );
};