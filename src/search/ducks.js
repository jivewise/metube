import {createRoutine} from 'redux-saga-routines';
import {createAction} from 'redux-actions';

export const UPDATE_TERM = 'UPDATE_TERM';
export const reqSearch = createRoutine('REQ_SEARCH');
export const updateTerm = createAction(UPDATE_TERM);
export const selectSearchStr = ({search}) => search.searchTerm;

export const initialState = {
  status: 'init',
  searchTerm: '',
  data: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TERM: {
      return {
        ...state,
        searchTerm: action.payload.target.value,
      };
    }
    case reqSearch.REQUEST: {
      return {
        ...state,
        error: null,
        loading: true,
        data: {},
        status: 'request',
      };
    }

    case reqSearch.SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: 'success',
      };
    }

    case reqSearch.FAILURE: {
      return {
        ...state,
        status: 'failure',
        loading: false,
        error: action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
