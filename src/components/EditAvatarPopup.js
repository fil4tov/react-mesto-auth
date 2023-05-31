import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts";
import {useSubmitButton, useValidation} from "../hooks";
import {Input} from "./ui";

const EditAvatarPopup = ({isOpen, onClose, onSubmit}) => {
  const {setCurrentUser} = React.useContext(CurrentUserContext)
  const avatar = useValidation('')
  const {
    setIsLoading,
    buttonText,
    setButtonText,
    isSubmitDisabled
  } = useSubmitButton({
    initialText: 'Сохранить',
    inputsValidity: [avatar.isValid]
  })

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    setButtonText('Сохранение...')
    onSubmit({avatar: avatar.value})
      .then(userInfo => {
        setCurrentUser(userInfo)
        handleClose()
      })
      .catch(console.log)
      .finally(() => {
        setIsLoading(false)
        setButtonText('Сохранить')
      })
  }

  const handleClose = () => {
    avatar.clear()
    onClose()
  }

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        avatar.ref.current.focus()
      }, 100)
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={handleClose}
      isSubmitDisabled={isSubmitDisabled}
      onSubmit={handleSubmit}
    >

      <Input
        className='popup__field'
        value={avatar.value}
        onChange={avatar.onChange}
        ref={avatar.ref}
        error={Boolean(avatar.error)}
        errorMessage={avatar.error}
        type="url"
        placeholder="Ссылка на аватар"
        required
      />

    </PopupWithForm>
  );
};

export default EditAvatarPopup;