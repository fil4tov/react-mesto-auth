import React from "react";
import {usePopup} from "./index";

const useTooltip = ({initialIsOpen}) => {
  const {isOpen, open, close} = usePopup({initialIsOpen})
  const [successful, setSuccessful] = React.useState(false);
  const [text, setText] = React.useState('');

  return {isOpen, open, close, text, setText, successful, setSuccessful}
}

export default useTooltip