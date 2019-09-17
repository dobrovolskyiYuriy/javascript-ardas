import { put } from 'redux-saga/effects';
import { successAction, failedAction } from '../types';

export default function* (action, actionType) {
  try {
    const result = yield action();
    yield put({
      type: successAction(actionType),
      payload: result
    });
  } catch (error) {
    yield put({
      type: failedAction(actionType),
      error
    });
  }
}