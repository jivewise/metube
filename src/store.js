import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'; // eslint-disable-line

const configureStore = (reducer, sagas) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
