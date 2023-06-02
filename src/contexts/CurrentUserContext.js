import React from "react";
import api from "../api/api";
import {useRequest} from "../hooks";

export const CurrentUserContext = React.createContext({})

export const CurrentUserProvider = ({children}) => {
  const {request, isLoading, error} = useRequest({initialLoading: false})
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    request(api.getUserInfo)
      .then(setCurrentUser)
  }, []);

  const updateAvatar = React.useCallback(async ({avatar}) => {
    return await request(() => api.updateAvatar({avatar}))
      .then((userInfo) => setCurrentUser(userInfo))
  }, [currentUser])

  const updateUserInfo = React.useCallback(async ({name, about}) => {
    return await request(() => api.updateUserInfo({name, about}))
      .then((userInfo) => setCurrentUser(userInfo))
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