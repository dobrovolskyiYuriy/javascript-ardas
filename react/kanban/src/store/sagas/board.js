import { takeLatest, put } from 'redux-saga/effects';
import { GET_BOARD } from '../types';
import { getColumns } from '../actions/column';
import { getCards } from '../actions/card';

function* actionGetBoard() {
  yield put(getColumns());
  yield put(getCards());
}

function* watcherGetBoard() {
  yield takeLatest(GET_BOARD, actionGetBoard);
}

export default [watcherGetBoard];