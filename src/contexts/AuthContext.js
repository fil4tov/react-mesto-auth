import React from "react";
import {getJWT, setJWT, unsetJWT} from "../utils/helpers";
import {AuthService} from "../api/AuthService";
import {useRequest} from "../hooks";

export const AuthContext = React.createContext({})

export const AuthProvider = ({children}) => {
  const {request, isLoading, error, setIsLoading} = useRequest({initialLoading: true})
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [hasToken, setHasToken] = React.useState(() => Boolean(getJWT()));

  React.useEffect(() => {
    hasToken
      ? checkAuth()
      : setIsLoading(false)
  }, [hasToken]);

  const register = React.useCallback(async ({email, password}) => {
    return await request(() => AuthService.register({email, password}))
  }, [])

  const login = React.useCallback(async ({email, password}) => {
    return await request(() => AuthService.login({email, password}))
      .then(({token}) => {
        setJWT(token)
        setIsAuth(true)
        setHasToken(true)
      })
  }, [isAuth])

  const checkAuth = React.useCallback(async () => {
    return await request(() => AuthService.checkAuth())
      .then(({data}) => {
        setUser(data)
        setIsAuth(true)
        setHasToken(true)
      })
  }, [isAuth])

  const logout = React.useCallback(() => {
    unsetJWT()
    setUser({})
    setIsAuth(false)
    setHasToken(false)
  }, [isAuth])

  const store = React.useMemo(() => {
    return {
      user,
      isAuth,
      isLoading,
      error,
      logout,
      login,
      register
    }
  }, [user, isAuth, isLoading])

  return (
    <AuthContext.Provider value={store}>
      {children}
    </AuthContext.Provider>
  );
};