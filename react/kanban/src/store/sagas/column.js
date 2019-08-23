import { takeLatest, call } from 'redux-saga/effects';
import { GET_COLUMNS } from '../types';
import { getColumns } from '../../services/api';
import makeAsyncRequest from './makeAsyncRequest';

function* fetchColumns() {
  const action = () => call(getColumns);
  yield makeAsyncRequest(action, GET_COLUMNS);
}

function* watchGetColumns() {
  yield takeLatest(GET_COLUMNS, fetchColumns);
}

export default [watchGetColumns];