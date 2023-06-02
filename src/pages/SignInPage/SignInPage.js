import React from "react";
import Login from "../../components/Login";
import {Navigate} from "react-router-dom";
import {appRoutes} from "../../utils/consts";
import {AuthContext} from "../../contexts";

const SignInPage = ({loginProps}) => {
  const {isAuth} = React.useContext(AuthContext)

  if (isAuth) {
    return <Navigate to={appRoutes.home.path} replace />
  }

  return (
    <section>
      <Login {...loginProps} />
    </section>
  );
};

export default SignInPage;