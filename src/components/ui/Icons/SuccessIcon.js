import React from 'react';
import {classNames} from "../../../utils/helpers";
import successSvg from "../../../assets/images/icons/success.svg";

const SuccessIcon = ({className, ...props}) => {
  return (
    <img
      {...props}
      className={classNames(['icon', className])}
      src={successSvg}
      alt="Успешно"
    />
  );
};

export default SuccessIcon;