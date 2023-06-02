import {AuthProvider, CardsProvider, CurrentUserProvider} from "../contexts";

const AppContextProvider = ({children}) => {
  return (
    <CurrentUserProvider>
      <AuthProvider>
        <CardsProvider>
          {children}
        </CardsProvider>
      </AuthProvider>
    </CurrentUserProvider>
  );
};

export default AppContextProvider;