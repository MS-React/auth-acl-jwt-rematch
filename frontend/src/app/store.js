import { createStore, applyMiddleware } from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, loadingBarMiddleware()),
);
export const { dispatch } = store;
sagaMiddleware.run(rootSaga);
