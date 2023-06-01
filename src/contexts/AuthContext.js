import React from "react";
import {getJWT, setJWT, unsetJWT} from "../utils/helpers";
import {AuthService} from "../api/AuthService";

export const AuthContext = React.createContext({})

export const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasToken, setHasToken] = React.useState(() => Boolean(getJWT()));

  React.useEffect(() => {
    if (hasToken) {
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
  }, [hasToken]);

  const handleLogout = () => {
    unsetJWT()
    setUser({})
    setIsAuth(false)
    setHasToken(false)
  }

  const handleLogin = (jwt) => {
    setJWT(jwt)
    setIsAuth(true)
    setHasToken(true)
  }

  const handleCheckAuth = (userData) => {
    setUser(userData)
    setIsAuth(true)
    setHasToken(true)
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