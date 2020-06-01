import {all, fork} from 'redux-saga/effects';

import search from './search';

function startSagas(...sagas) {
  return function* rootSaga() {
    yield all([...sagas.map(saga => fork(saga))]);
  };
}

export default startSagas(...search.sagas);
