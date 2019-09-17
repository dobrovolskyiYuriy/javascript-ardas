import { GET_CARDS, ADD_CARD, DELETE_CARD, UPDATE_CARD } from '../types';

export function getCards() {
  return {
    type: GET_CARDS
  };
}

export function addCard(newCard) {
  return {
    type: ADD_CARD,
    payload: newCard
  };
}

export function deleteCard(cardId) {
  return {
    type: DELETE_CARD,
    payload: cardId
  };
}

export function updateCard(cardId, updatedCardProps) {
  return {
    type: UPDATE_CARD,
    payload: {
      cardId,
      updatedCardProps
    }
  };
}