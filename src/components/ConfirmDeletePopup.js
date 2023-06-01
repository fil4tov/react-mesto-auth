import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {useSubmitButton} from "../hooks";
import {CardsContext} from "../contexts";

const ConfirmDeletePopup = ({isOpen, onClose, cardId}) => {
  const {deleteCard, isLoading} = React.useContext(CardsContext)
  const {
    buttonText,
    setButtonText,
    isSubmitDisabled
  } = useSubmitButton({
    initialText: 'Да',
    isLoading
  })

  const handleSubmit = e => {
    e.preventDefault()
    setButtonText('Удаление...')
    deleteCard(cardId)
      .then(() => {
        onClose()
      })
      .catch(console.log)
      .finally(() => {
        setButtonText('Да')
      })
  }

  return (
    <PopupWithForm
      title='Вы уверены?'
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    />
  );
};

export default ConfirmDeletePopup;