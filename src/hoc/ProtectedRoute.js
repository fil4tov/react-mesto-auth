import React from "react";
import {Navigate} from "react-router-dom";
import Loader from "../components/Loader";
import {appRoutes} from "../utils/consts";
import {AuthContext} from "../contexts";


const ProtectedRoute = ({element}) => {
  const {isLoading, isAuth} = React.useContext(AuthContext)

  if (isLoading) {
    return <Loader isLoading/>
  }

  return isAuth ? element : <Navigate to={appRoutes.signIn.path} replace />
};


export default ProtectedRoute;