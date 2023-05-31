import React from "react";
const usePopupCloseListeners = (isOpen, handleClose) => {
  const [isVisible, setIsVisible] = React.useState(isOpen);

  React.useEffect(() => {
    if (isOpen) setIsVisible(true)
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) setIsVisible(false)
  }

  const handleCloseOnOverlay = e => {
    if (e.target.classList.contains('popup')) {
      handleClose()
    }
  }

  const handleCloseOnEsc = e => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  React.useEffect(() => {
    isOpen && document.addEventListener('keydown', handleCloseOnEsc)
    return () => document.removeEventListener('keydown', handleCloseOnEsc)
  }, [isOpen]);

  return {handleCloseOnOverlay, onAnimationEnd, isVisible}
}

export default usePopupCloseListeners