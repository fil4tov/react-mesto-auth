import React from 'react';
import {classNames} from "../../../utils/helpers";
import close from "../../../assets/images/icons/close.svg";

const CloseIcon = ({className, ...props}) => {
  return (
    <img
      {...props}
      className={classNames(['icon', className])}
      src={close}
      alt="Закрыть"
    />
  );
};

export default CloseIcon;