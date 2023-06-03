import React from 'react';
import {ButtonSubmit, Input} from "./ui";
import {useSubmitButton, useValidation} from "../hooks";
import md5 from "md5";

const AuthForm = ({onSubmit, title, buttonText, children, hasValidation}) => {
  const email = useValidation('')
  const password = useValidation('')
  const {isSubmitDisabled} = useSubmitButton({
    inputsValidity: hasValidation ? [email.isValid, password.isValid] : []
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit({
      email: email.value,
      password: md5(password.value)
    })
  }

  React.useEffect(() => {
    email.ref.current.focus()
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
      autoComplete="off"
    >
      <h2 className="form__title form__title_inverted">{title}</h2>

      <Input
        value={email.value}
        onChange={email.onChange}
        ref={email.ref}
        error={hasValidation && Boolean(email.error)}
        errorMessage={hasValidation && email.error}
        inverted
        type="email"
        placeholder="Email"
        required
      />

      <Input
        value={password.value}
        onChange={password.onChange}
        ref={password.ref}
        error={hasValidation && Boolean(password.error)}
        errorMessage={hasValidation && password.error}
        type="password"
        placeholder="Пароль"
        minLength="6"
        maxLength="20"
        inverted
        required
      />

      <ButtonSubmit
        disabled={isSubmitDisabled}
        className='form__submit'
        inverted
        type="submit"
        aria-label={buttonText}
      >
        {buttonText}
      </ButtonSubmit>

      {children}

    </form>
  );
};

export default AuthForm;