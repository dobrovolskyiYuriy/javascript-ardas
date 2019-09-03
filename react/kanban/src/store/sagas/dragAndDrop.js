import { takeLatest, put } from 'redux-saga/effects';
import { DROP } from '../types';
import { updateCard } from '../actions/card';

function* actionDrop(action) {
  const { dragedCardId, dropColumnId } = action.payload;
  yield put(updateCard(dragedCardId, { columnId: dropColumnId }));
}

function* watcherDrop() {
  yield takeLatest(DROP, actionDrop);
}

export default [watcherDrop];