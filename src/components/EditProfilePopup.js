import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts";
import {useSubmitButton, useValidation} from "../hooks";
import {Input} from "./ui";

const EditProfilePopup = ({isOpen, onClose, onSubmit}) => {
  const {currentUser, setCurrentUser} = React.useContext(CurrentUserContext)
  const name = useValidation('')
  const about = useValidation('')
  const {
    setIsLoading,
    buttonText,
    setButtonText,
    isSubmitDisabled
  } = useSubmitButton({
    initialText: 'Сохранить',
    inputsValidity: [name.isValid, about.isValid]
  })

  React.useEffect(() => {
    name.set(currentUser.name)
    about.set(currentUser.about)
  }, [currentUser, isOpen]);

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    setButtonText('Сохранение...')
    onSubmit({name: name.value, about: about.value})
      .then(userInfo => {
        setCurrentUser(userInfo)
        onClose()
      })
      .catch(console.log)
      .finally(() => {
        setIsLoading(false)
        setButtonText('Сохранить')
      })
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
      name='edit'
      title='Редактировать профиль'
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    >

      <Input
        value={name.value ?? ''}
        onChange={name.onChange}
        ref={name.ref}
        error={Boolean(name.error)}
        errorMessage={name.error}
        type="text"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />

      <Input
        className='popup__field'
        value={about.value ?? ''}
        onChange={about.onChange}
        ref={about.ref}
        error={Boolean(about.error)}
        errorMessage={about.error}
        type="text"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
      />

    </PopupWithForm>
  );
};

export default EditProfilePopup;