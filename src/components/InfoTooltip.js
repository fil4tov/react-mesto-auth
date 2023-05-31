import React from 'react';
import {usePopupCloseListeners} from "../hooks";
import {classNames} from "../utils/helpers";
import {FailIcon, SuccessIcon} from "./ui/Icons";

const InfoTooltip = ({isOpen, onClose, successful, successText, failText}) => {
  const {
    handleCloseOnOverlay,
    onAnimationEnd,
    isVisible
  } = usePopupCloseListeners(isOpen, onClose)

  const toolTipImg = successful
    ? <SuccessIcon className='tooltip__image'/>
    : <FailIcon className='tooltip__image'/>

  const toolTipText = successful
    ? successText
    : failText

  return (
    <>
      {isVisible && (
        <div
          onMouseDown={handleCloseOnOverlay}
          onAnimationEnd={onAnimationEnd}
          className={classNames(['popup'], {['popup_opened']: isOpen})}
        >
          <div className="popup__container">
            <div className='tooltip'>
              {toolTipImg}
              <p className='tooltip__text'>{toolTipText}</p>
              <button
                onClick={onClose}
                className="button popup__close"
                type="button"
                aria-label="Закрыть модальное окно"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoTooltip;