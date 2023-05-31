import React from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState({});

  const store = React.useMemo(() => {
    return {
      user,
      setUser,
      isAuth,
      setIsAuth
    }
  }, [user, isAuth])

  return (
    <AuthContext.Provider value={store}>
      {children}
    </AuthContext.Provider>
  );
};