import React from "react";
import api from "../api/api";
import {useContextRequest} from "../hooks";

export const CurrentUserContext = React.createContext({})

export const CurrentUserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = React.useState({});
  const {request, isLoading, error, setError} = useContextRequest()

  React.useEffect(() => {
    api.getUserInfo()
      .then(setCurrentUser)
      .catch(setError)
  }, []);

  const updateAvatar = React.useCallback(async ({avatar}) => {
    return await request({
      fetchCallback: () => api.updateAvatar({avatar}),
      thenCallback: (userInfo) => setCurrentUser(userInfo)
    })
  }, [currentUser])

  const updateUserInfo = React.useCallback(async ({name, about}) => {
    return await request({
      fetchCallback: () => api.updateUserInfo({name, about}),
      thenCallback: (userInfo) => setCurrentUser(userInfo)
    })
  }, [currentUser])

  const store = React.useMemo(() => {
    return {
      currentUser,
      isLoading,
      error,
      updateAvatar,
      updateUserInfo,
    }
  }, [currentUser, isLoading, error])

  return (
    <CurrentUserContext.Provider value={store}>
      {children}
    </CurrentUserContext.Provider>
  );
};