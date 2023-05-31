import React from 'react';
import {classNames} from "../../../utils/helpers";
import failSvg from '../../../assets/images/icons/fail.svg'

const FailIcon = ({className, ...props}) => {
  return (
    <img
      {...props}
      className={classNames(['icon', className])}
      src={failSvg}
      alt="Неудачно"
    />
  );
};

export default FailIcon;