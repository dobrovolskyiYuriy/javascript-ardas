import { takeLatest, call } from 'redux-saga/effects';
import { GET_CARDS, ADD_CARD, DELETE_CARD, UPDATE_CARD } from '../types';
import { getCards, addCard, deleteCard, updateCard } from '../../services/api';
import makeAsyncRequest from './makeAsyncRequest';

function* actionGetCards() {
  const fetchCards = () => call(getCards);
  yield makeAsyncRequest(fetchCards, GET_CARDS);
}

function* actionAddCard(action) {
  const addNewCard = () => call(addCard, action.payload);
  yield makeAsyncRequest(addNewCard, ADD_CARD);
}

function* actionDeleteCard(action) {
  const cardDelete = () => call(deleteCard, action.payload);
  yield makeAsyncRequest(cardDelete, DELETE_CARD);
}

function* actionUpdateCard(action) {
  const { cardId, updatedCardProps } = action.payload;
  const cardUpdate = () => call(updateCard, cardId, updatedCardProps);
  yield makeAsyncRequest(cardUpdate, UPDATE_CARD);
}

function* watcherGetCards() {
  yield takeLatest(GET_CARDS, actionGetCards);
}

function* watcherAddCard() {
  yield takeLatest(ADD_CARD, actionAddCard);
}

function* watcherDeleteCard() {
  yield takeLatest(DELETE_CARD, actionDeleteCard);
}

function* watcherUpdateCard() {
  yield takeLatest(UPDATE_CARD, actionUpdateCard);
}

export default [watcherGetCards, watcherAddCard, watcherDeleteCard, watcherUpdateCard];