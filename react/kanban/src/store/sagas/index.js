import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';

import board from './board';
import card from './card';

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

function* root() {
  const watchers = [board, card].flat();
  yield all(watchers.map(fork));
}

export const run = () => sagaMiddleware.run(root);