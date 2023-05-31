import React from 'react';
import {classNames} from "../../../utils/helpers";

const ButtonSubmit = ({inverted, className, children, ...props}) => {
  return (
    <button
      className={classNames(['button button__submit', className], {
        ['button__submit_type_inverted']: inverted
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;