import React from 'react';
import {usePopupCloseListeners} from "../hooks";
import {classNames} from "../utils/helpers";
import {ButtonSubmit} from "./ui";

const PopupWithForm = ({
  name,
  title,
  buttonText,
  children,
  isOpen,
  onClose,
  onSubmit,
  isSubmitDisabled
}) => {
  const {
    handleCloseOnOverlay,
    onAnimationEnd,
    isVisible
  } = usePopupCloseListeners(isOpen, onClose)

  return (
    <>
      {isVisible && (
        <div
          onMouseDown={handleCloseOnOverlay}
          onAnimationEnd={onAnimationEnd}
          className={classNames(['popup', `popup_type_${name}`], {['popup_opened']: isOpen})}
        >
          <div className="popup__container">

            <h2 className="popup__title">{title}</h2>

            <form
              onSubmit={onSubmit}
              name={name}
              className="popup__form"
              autoComplete="off"
            >

              {children}

              <ButtonSubmit
                disabled={isSubmitDisabled}
                type="submit"
                aria-label={buttonText}
              >
                {buttonText}
              </ButtonSubmit>

            </form>

            <button
              onClick={onClose}
              className="button popup__close"
              type="button"
              aria-label="Закрыть модальное окно"
            />

          </div>
        </div>
      )}
    </>
  );
};

export default PopupWithForm;