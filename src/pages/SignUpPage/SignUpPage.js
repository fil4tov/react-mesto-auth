import React from "react";
import Register from "../../components/Register";
import {Navigate} from "react-router-dom";
import {appRoutes} from "../../utils/consts";
import {AuthContext} from "../../contexts";

const SignUpPage = ({registerProps}) => {
  const {isAuth} = React.useContext(AuthContext)

  if (isAuth) {
    return <Navigate to={appRoutes.home.path} replace />
  }

  return (
    <section>
      <Register {...registerProps} />
    </section>
  );
};

export default SignUpPage;