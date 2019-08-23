import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';

import board from './board';

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

function* root() {
  const watchers = [board].flat();
  yield all(watchers.map(fork));
}

export const run = () => sagaMiddleware.run(root);