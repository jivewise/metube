import {put, takeEvery} from 'redux-saga/effects';
import {reqSearch} from '../search/ducks';
import {UPDATE_SORT} from './ducks';

export function* searchWorker() {
	yield put(reqSearch());
}

export function* reqSearchWatcher() {
  yield takeEvery(UPDATE_SORT, searchWorker);
}

export default [reqSearchWatcher];
