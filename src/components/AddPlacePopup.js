import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {useSubmitButton, useValidation} from "../hooks";
import {Input} from "./ui";
import {CardsContext} from "../contexts";

const AddPlacePopup = ({isOpen, onClose}) => {
  const {addCard, isLoading} = React.useContext(CardsContext)
  const name = useValidation('')
  const link = useValidation('')
  const {
    buttonText,
    setButtonText,
    isSubmitDisabled
  } = useSubmitButton({
    initialText: 'Создать',
    inputsValidity: [name.isValid, link.isValid],
    isLoading
  })

  const handleSubmit = e => {
    e.preventDefault()
    setButtonText('Создание...')
    addCard({link: link.value, name: name.value})
      .then(() => {
        handleClose()
      })
      .catch(console.log)
      .finally(() => {
        setButtonText('Создать')
      })
  }

  const handleClose = () => {
    name.clear()
    link.clear()
    onClose()
  }

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        name.ref.current.focus()
      }, 100)
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name='add'
      title='Добавить пост'
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    >

      <Input
        value={name.value}
        onChange={name.onChange}
        ref={name.ref}
        error={Boolean(name.error)}
        errorMessage={name.error}
        type="text"
        placeholder="Место"
        minLength="2"
        maxLength="30"
        required
      />

      <Input
        className='popup__field'
        value={link.value}
        onChange={link.onChange}
        ref={link.ref}
        error={Boolean(link.error)}
        errorMessage={link.error}
        type="url"
        placeholder="Ссылка на картинку"
        required
      />

    </PopupWithForm>
  );
};

export default AddPlacePopup;