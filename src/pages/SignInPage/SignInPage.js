import Login from "../../components/Login";
import {Navigate} from "react-router-dom";
import {useCheckAuth} from "../../hooks";
import {appRoutes} from "../../utils/consts";

const SignInPage = () => {
  const {isAuth} = useCheckAuth()

  if (isAuth) {
    return <Navigate to={appRoutes.home.path} />
  }

  return (
    <section>
      <Login/>
    </section>
  );
};

export default SignInPage;