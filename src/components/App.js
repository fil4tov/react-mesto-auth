import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from "react-router-dom";
import Layout from "./Layout";
import {HomePage, SignUpPage, SignInPage} from "../pages";
import ProtectedRoute from "../hoc/ProtectedRoute";
import {AuthProvider, CurrentUserProvider} from "../contexts";
import {appRoutes} from "../utils/consts";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<ProtectedRoute element={<HomePage/>}/>}/>
    <Route path={appRoutes.signIn.path} element={<SignInPage/>}/>
    <Route path={appRoutes.signUp.path} element={<SignUpPage/>}/>
    <Route path='*' element={<Navigate to={appRoutes.home.path} replace/>}/>
  </Route>
))

const App = () => {
  return (
    <CurrentUserProvider>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </CurrentUserProvider>
  );
};

export default App;