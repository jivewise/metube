import {combineReducers} from 'redux';

import search from './search';
import sort from './sort';

export default combineReducers({
	search: search.ducks,
	sort: sort.ducks,
});
