import React from "react";
import api from "../api/api";
import {useContextRequest} from "../hooks";

export const CardsContext = React.createContext({})

export const CardsProvider = ({children}) => {
  const [cards, setCards] = React.useState([]);
  const {request, isLoading, error, setError} = useContextRequest()

  React.useEffect(() => {
    api.getInitialCards()
      .then(setCards)
      .catch(setError)
  }, []);

  const deleteCard = React.useCallback(async (cardId) => {
    return await request({
      fetchCallback: () => api.deleteCard(cardId),
      thenCallback: () => setCards(cards.filter(({_id}) => _id !== cardId))
    })
  }, [cards])

  const addCard = React.useCallback(async (cardData) => {
    return await request({
      fetchCallback: () => api.addCard(cardData),
      thenCallback: (newCard) => setCards([newCard, ...cards])
    })
  }, [cards])

  const likeCard = React.useCallback(async (isLiked, id) => {
    return await request({
      fetchCallback: () => api.toggleLike(id, isLiked ? 'DELETE' : 'PUT'),
      thenCallback: (updatedCard) => setCards(cards.map(card => card._id === id ? updatedCard : card))
    })
  }, [cards])

  const store = React.useMemo(() => {
    return {
      cards,
      error,
      isLoading,
      deleteCard,
      addCard,
      likeCard
    }
  }, [cards, error, isLoading])

  return (
    <CardsContext.Provider value={store}>
      {children}
    </CardsContext.Provider>
  );
};