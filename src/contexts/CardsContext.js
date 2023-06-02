import React from "react";
import api from "../api/api";
import {useRequest} from "../hooks";

export const CardsContext = React.createContext({})

export const CardsProvider = ({children}) => {
  const {request, isLoading, error} = useRequest({initialLoading: false})
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    request(() => api.getInitialCards())
      .then(setCards)
  }, []);

  const deleteCard = React.useCallback(async (cardId) => {
    return await request(() => api.deleteCard(cardId))
      .then(() => {
        setCards(cards.filter(({_id}) => _id !== cardId))
      })
  }, [cards])

  const addCard = React.useCallback(async (cardData) => {
    return await request(() => api.addCard(cardData))
      .then((newCard) => {
        setCards([newCard, ...cards])
      })
  }, [cards])

  const likeCard = React.useCallback(async (isLiked, id) => {
    return await request(() => api.toggleLike(id, isLiked ? 'DELETE' : 'PUT'))
      .then((updatedCard) => {
        setCards(cards.map(card => card._id === id ? updatedCard : card))
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