import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from "react-router-dom";
import Layout from "./Layout";
import {HomePage, SignUpPage, SignInPage} from "../pages";
import {AppContextProvider, ProtectedRoute} from "../hoc";
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
    <AppContextProvider>
      <RouterProvider router={router}/>
    </AppContextProvider>
  );
};

export default App;