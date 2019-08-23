import { takeLatest, call } from 'redux-saga/effects';
import { GET_BOARD } from '../types';
import { getBoard } from '../../services/api';
import makeAsyncRequest from './makeAsyncRequest';

function* fetchBoard() {
  const action = () => call(getBoard);
  yield makeAsyncRequest(action, GET_BOARD);
}

function* watchGetBoard() {
  yield takeLatest(GET_BOARD, fetchBoard);
}

export default [watchGetBoard];