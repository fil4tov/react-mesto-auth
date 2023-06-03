import {AuthProvider, CardsProvider, CurrentUserProvider} from "../contexts";

const AppContextProvider = ({children}) => {
  return (
    <div>
      <AuthProvider>
        <CurrentUserProvider>
          <CardsProvider>
            {children}
          </CardsProvider>
        </CurrentUserProvider>
      </AuthProvider>
    </div>
  );
};

export default AppContextProvider;