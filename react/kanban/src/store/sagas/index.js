import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';

import board from './board';
import column from './column';
import card from './card';
import dragAndDrop from './dragAndDrop';

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

function* root() {
  const watchers = [board, column, card, dragAndDrop].flat();
  yield all(watchers.map(fork));
}

export const run = () => sagaMiddleware.run(root);