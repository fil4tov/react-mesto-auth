import React from 'react';
import {classNames} from "../../../utils/helpers";

const Input = React.forwardRef((props, ref) => {
  const {className, inverted, error, errorMessage, ...otherProps} = props
  return (
    <label className={classNames(['text-field', className])}>
      <input
        ref={ref}
        className={classNames(['text-field__input'], {
          ['text-field__input_type_error']: error,
          ['text-field__input_type_inverted']: inverted,
        })}
        {...otherProps}
      />
      <span className="text-field__error">{errorMessage}</span>
    </label>
  );
});

export default Input;