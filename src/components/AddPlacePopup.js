import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {useSubmitButton, useValidation} from "../hooks";
import {Input} from "./ui";

const AddPlacePopup = ({isOpen, onClose, onSubmit, cards, setCards}) => {
  const name = useValidation('')
  const link = useValidation('')
  const {
    setIsLoading,
    buttonText,
    setButtonText,
    isSubmitDisabled
  } = useSubmitButton({
    initialText: 'Создать',
    inputsValidity: [name.isValid, link.isValid]
  })

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    setButtonText('Создание...')
    onSubmit({link: link.value, name: name.value})
      .then(newCard => {
        setCards([newCard, ...cards])
        handleClose()
      })
      .catch(console.log)
      .finally(() => {
        setIsLoading(false)
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