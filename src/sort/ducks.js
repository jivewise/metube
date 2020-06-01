import {createAction} from 'redux-actions';

export const UPDATE_SORT = 'UPDATE_SORT';
export const updateSort = createAction(UPDATE_SORT);

export const selectSortStr = ({ sort }) => {
	return sort.sort;
};

export const initialState = {
  sort: 'date',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SORT: {
      return {
        ...state,
        sort: action.payload.target.value,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
