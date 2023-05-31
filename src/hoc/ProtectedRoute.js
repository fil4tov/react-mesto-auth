import {Navigate} from "react-router-dom";
import Loader from "../components/Loader";
import {useCheckAuth} from "../hooks";
import {appRoutes} from "../utils/consts";


const ProtectedRoute = ({element}) => {
  const {isLoading, isAuth} = useCheckAuth()

  if (isLoading) {
    return <Loader/>
  }

  return isAuth ? element : <Navigate to={appRoutes.signIn.path} />
};


export default ProtectedRoute;