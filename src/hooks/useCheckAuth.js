import React from "react";
import {getJWT} from "../utils/helpers";
import {AuthService} from "../api/AuthService";
import {AuthContext} from "../contexts";

const useCheckAuth = () => {
  const {isAuth, setIsAuth, setUser} = React.useContext(AuthContext)
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (getJWT()) {
      AuthService.checkAuth()
        .then(res => {
          setUser(res.data)
          setIsAuth(true)
        })
        .catch(console.log)
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsAuth(false)
      setIsLoading(false)
    }
  }, []);

  return {isAuth, isLoading}
}

export default useCheckAuth