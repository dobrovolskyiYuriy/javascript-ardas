import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';

import column from './column';

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

function* root() {
  const watchers = [column].flat();
  yield all(watchers.map(fork));
}

export const run = () => sagaMiddleware.run(root);