import React from "react";
import {classNames} from "../utils/helpers";

const useValidation = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);
  const [error, setError] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  const ref = React.useRef(null)

  const onChange = e => {
    setValue(e.target.value)
    validateInput()
  }

  const clear = () => {
    setValue('')
    setIsValid(false)
    setError('')
  }

  const set = (value) => {
    setValue(value)
    validateInput()
  }

  const validateInput = () => {
    if (ref.current && !ref.current.validity.valid) {
      setError(ref.current.validationMessage)
      setIsValid(false)
    } else {
      setError('')
      setIsValid(true)
    }
  }

  return {value, onChange, clear, set, ref, error, isValid}
}

export default useValidation