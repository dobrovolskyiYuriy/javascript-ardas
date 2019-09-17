import { takeLatest, call } from 'redux-saga/effects';
import { GET_COLUMNS } from '../types';
import makeAsyncRequest from './makeAsyncRequest';
import { getColumns } from '../../services/api';

function* actionGetColumns() {
  const fetchColumns = () => call(getColumns);
  yield makeAsyncRequest(fetchColumns, GET_COLUMNS);
}

function* watcherGetColumns() {
  yield takeLatest(GET_COLUMNS, actionGetColumns);
}

export default [watcherGetColumns];