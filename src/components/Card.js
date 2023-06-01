import React from 'react';
import {CurrentUserContext, CardsContext} from "../contexts";
import {classNames} from "../utils/helpers";

const Card = React.memo(({
  _id,
  name,
  link,
  likes,
  owner,
  onImageClick,
  onCardDelete
}) => {
  const {currentUser} = React.useContext(CurrentUserContext)
  const {likeCard} = React.useContext(CardsContext)
  const isOwner = currentUser._id === owner._id
  const isLiked = likes.some(item => item._id === currentUser._id)

  const handleDeleteCard = () => {
    onCardDelete(_id)
  }

  const handleOpenPopup = () => {
    onImageClick({name, link})
  }

  const handleLikeCard = () => {
    likeCard(isLiked, _id)
  }

  return (
    <div className="card">
      <img
        onClick={handleOpenPopup}
        src={link}
        alt={name}
        className="card__photo"
      />
      <div className="card__description">
        <h2 className="card__location">{name}</h2>
        <div className="card__like">
          <button
            onClick={handleLikeCard}
            className={classNames(['button card__like-button'], {['card__like-button_active']: isLiked})}
            type="button"
            aria-label="Поставить лайк"
          />
          <p className="card__likes">{likes.length}</p>
        </div>
      </div>
      {isOwner &&
        <button
          onClick={handleDeleteCard}
          className="button card__delete-button"
          type="button"
          aria-label="Удалить пост"
        />}
    </div>
  );
});

export default Card;