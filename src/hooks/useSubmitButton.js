import React from "react";
const useSubmitButton = ({initialText, inputsValidity = [], isLoading = false}) => {
  const [buttonText, setButtonText] = React.useState(initialText);
  const isSubmitDisabled = inputsValidity.some(isValid => !isValid) || isLoading

  return {
    buttonText,
    setButtonText,
    isSubmitDisabled
  }
}

export default useSubmitButton