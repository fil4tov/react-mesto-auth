import Register from "../../components/Register";
import {useCheckAuth} from "../../hooks";
import {Navigate} from "react-router-dom";
import {appRoutes} from "../../utils/consts";

const SignUpPage = () => {
  const {isAuth} = useCheckAuth()

  if (isAuth) {
    return <Navigate to={appRoutes.home.path} />
  }

  return (
    <section>
      <Register/>
    </section>
  );
};

export default SignUpPage;