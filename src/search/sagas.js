import {debounce, put, call, takeEvery, select} from 'redux-saga/effects';
import {getSearch, getComments} from './api';
import {reqSearch, UPDATE_TERM, selectSearchStr} from './ducks';

export function* searchWorker() {
  try {
    const searchStr = yield select(selectSearchStr);
    if (!searchStr || searchStr.length < 5) {
      return;
    }

    const order = 'date';
    const {items, error} = yield call(getSearch, searchStr, order);

    if (error) {
      yield put(reqSearch.failure('invalid_search'));
      return;
    }

    const ids = items.map(({id}) => id.videoId);
    const commentData = yield call(getComments, ids.join(','));

    const data = items.map(video => {
      const {statistics} = commentData.items.find(
        ({id}) => id === video.id.videoId,
      );
      return {
        ...video,
        statistics,
      };
    });

    yield put(reqSearch.success(data));
  } catch (e) {
    console.error(e);
    yield put(reqSearch.failure('invalid_search'));
  }
}

export function* reqSearchWatcher() {
  yield takeEvery(reqSearch.TRIGGER, searchWorker);
}

export function* updateTermWatcher() {
  yield debounce(1000, UPDATE_TERM, searchWorker);
}

export default [reqSearchWatcher, updateTermWatcher];
