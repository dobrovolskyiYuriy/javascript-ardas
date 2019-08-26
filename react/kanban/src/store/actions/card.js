import { ADD_CARD } from '../types';
import { DELETE_CARD } from '../types';

export function addCard({ title, columnId }) {
  return {
    type: ADD_CARD,
    payload: {
      title, 
      columnId
    }
  };
}

export function deleteCard(cardId) {
  return {
    type: DELETE_CARD,
    payload: cardId
  };
}