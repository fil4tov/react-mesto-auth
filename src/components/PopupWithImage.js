import React from 'react';
import {usePopupCloseListeners} from "../hooks";
import {classNames} from "../utils/helpers";

const PopupWithImage = ({link, name, isOpen, onClose}) => {
  const {
    handleCloseOnOverlay,
    onAnimationEnd,
    isVisible
  } = usePopupCloseListeners(isOpen, onClose)

  return (
    <>
      {isVisible && (
        <div
          onClick={handleCloseOnOverlay}
          onAnimationEnd={onAnimationEnd}
          className={classNames(['popup', 'popup_type_image', 'popup_dark'], {['popup_opened']: isOpen})}
        >
          {Boolean(isOpen) &&
            <div className="popup__container popup__container_image">
              <img className="popup__full-screen-image" src={link} alt={name}/>
              <p className="popup__location">{name}</p>
              <button
                onClick={onClose}
                className="button popup__close"
                type="button"
                aria-label="Закрыть модальное окно"
              />
            </div>}
        </div>
      )}
    </>
  );
};

export default PopupWithImage;