import { takeLatest, call } from 'redux-saga/effects';
import { DELETE_CARD, ADD_CARD } from '../types';
import makeAsyncRequest from './makeAsyncRequest';
import { deleteCard, addCard } from '../../services/api';

function* actionDeleteCard(action) {
  yield makeAsyncRequest(
    () => call(deleteCard, action.payload),
    DELETE_CARD
  );
}

function* actionAddCard(action) {
  yield makeAsyncRequest(
    () => call(addCard, action.payload),
    ADD_CARD
  );
}

function* watcherDeleteCard() {
  yield takeLatest(DELETE_CARD, actionDeleteCard);
}

function* watcherAddCard() {
  yield takeLatest(ADD_CARD, actionAddCard);
}

export default [watcherDeleteCard, watcherAddCard];