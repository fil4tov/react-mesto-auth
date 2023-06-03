import React from 'react';
import EditProfilePopup from "../../components/EditProfilePopup";
import EditAvatarPopup from "../../components/EditAvatarPopup";
import AddPlacePopup from "../../components/AddPlacePopup";
import ConfirmDeletePopup from "../../components/ConfirmDeletePopup";
import PopupWithImage from "../../components/PopupWithImage";
import ErrorBlock from "../../components/ErrorBlock";
import Main from "../../components/Main";
import {usePopup} from "../../hooks";
import {CardsContext} from "../../contexts";

const HomePage = () => {
  const {error} = React.useContext(CardsContext)
  const popupAdd = usePopup({initialIsOpen: false})
  const popupEdit = usePopup({initialIsOpen: false})
  const popupAvatar = usePopup({initialIsOpen: false})
  const popupDelete = usePopup({initialIsOpen: false})
  const popupImage = usePopup({initialIsOpen: false})

  const [selectedCard, setSelectedCard] = React.useState({});
  const [deletingCard, setDeletingCard] = React.useState('');

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

  if (error) {
    return (
      <ErrorBlock
        text='Не удалось загрузить карточки'
        error={error}
      />
    )
  }

  return (
    <>
      <Main
        onAddPlace={popupAdd.open}
        onEditAvatar={popupAvatar.open}
        onEditProfile={popupEdit.open}
        cardProps={cardProps}
      />

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
    </>
  );
};

export default HomePage;