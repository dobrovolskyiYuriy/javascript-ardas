import { GET_COLUMNS, successAction, failedAction } from '../types';

const initialState = {
  data: [],
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (GET_COLUMNS): {
      return {
        ...state,
        loading: true
      };
    }

    case (successAction(GET_COLUMNS)): {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }

    case (failedAction(GET_COLUMNS)): {
      return {
        ...state,
        error: action.error,
        loading: false
      };
    }

    default: return state;
  }
}