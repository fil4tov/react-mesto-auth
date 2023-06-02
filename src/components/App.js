import React from "react";
import {
  Navigate,
  Route,
  Routes, useNavigate
} from "react-router-dom";
import Layout from "./Layout";
import {HomePage, SignUpPage, SignInPage} from "../pages";
import {ProtectedRoute, AppContextProvider} from "../hoc";
import {appRoutes} from "../utils/consts";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import PopupWithImage from "./PopupWithImage";
import {usePopup} from "../hooks";
import InfoTooltip from "./InfoTooltip";

const App = () => {
  const navigate = useNavigate()
  const popupAdd = usePopup({initialIsOpen: false})
  const popupEdit = usePopup({initialIsOpen: false})
  const popupAvatar = usePopup({initialIsOpen: false})
  const popupDelete = usePopup({initialIsOpen: false})
  const popupImage = usePopup({initialIsOpen: false})
  const toolTip = usePopup({initialIsOpen: false})

  const [selectedCard, setSelectedCard] = React.useState({});
  const [deletingCard, setDeletingCard] = React.useState('');

  const [successful, setSuccessful] = React.useState(false);
  const [tooltipText, setTooltipText] = React.useState('');
  const [navigatePathOnClose, setNavigatePathOnClose] = React.useState('');

  const onLoginError = React.useCallback(() => {
    toolTip.open()
    setSuccessful(false)
    setTooltipText('Что-то пошло не так! Попробуйте ещё раз.')
    setNavigatePathOnClose(appRoutes.signIn.path)
  }, [])

  const onRegisterError = React.useCallback(() => {
    toolTip.open()
    setSuccessful(false)
    setTooltipText('Вы ввели некорректный email или такой пользователь уже существует.')
    setNavigatePathOnClose(appRoutes.signUp.path)
  }, [])

  const onRegisterSuccess = React.useCallback(() => {
    toolTip.open()
    setSuccessful(true)
    setTooltipText('Вы успешно зарегистрировались!')
    setNavigatePathOnClose(appRoutes.signIn.path)
  }, [])

  const handleCloseTooltip = () => {
    toolTip.close()
    navigate(navigatePathOnClose)
  }


  const handleConfirmDeleteCard = React.useCallback((id) => {
    popupDelete.open()
    setDeletingCard(id)
  }, [])

  const handleClickCard = React.useCallback(({name, link}) => {
    popupImage.open()
    setSelectedCard({name, link})
  }, [])

  const cardProps = {
    onCardDelete: handleConfirmDeleteCard,
    onImageClick: handleClickCard
  }

  const mainProps = {
    onAddPlace: popupAdd.open,
    onEditAvatar: popupAvatar.open,
    onEditProfile: popupEdit.open,
    cardProps: cardProps
  }

  const registerProps = {
    onSuccess: onRegisterSuccess,
    onError: onRegisterError
  }
  const loginProps = {
    onError: onLoginError
  }

  return (
    <AppContextProvider>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<ProtectedRoute
            element={<HomePage mainProps={mainProps} />}
          />}/>
          <Route
            path={appRoutes.signIn.path}
            element={<SignInPage loginProps={loginProps} />}
          />
          <Route
            path={appRoutes.signUp.path}
            element={<SignUpPage registerProps={registerProps} />}
          />
          <Route path='*' element={<Navigate to={appRoutes.home.path} replace/>}/>
        </Route>
      </Routes>

      <EditProfilePopup
        isOpen={popupEdit.isOpen}
        onClose={popupEdit.close}
      />

      <EditAvatarPopup
        isOpen={popupAvatar.isOpen}
        onClose={popupAvatar.close}
      />

      <AddPlacePopup
        isOpen={popupAdd.isOpen}
        onClose={popupAdd.close}
      />

      <ConfirmDeletePopup
        isOpen={popupDelete.isOpen}
        onClose={popupDelete.close}
        cardId={deletingCard}
      />

      <PopupWithImage
        isOpen={popupImage.isOpen}
        onClose={popupImage.close}
        {...selectedCard}
      />

      <InfoTooltip
        isOpen={toolTip.isOpen}
        onClose={handleCloseTooltip}
        successful={successful}
        text={tooltipText}
      />
    </AppContextProvider>
  );
};

export default App;