import { successAction, failedAction, GET_COLUMNS } from '../types';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (GET_COLUMNS): {
      return {
        data: [],
        loading: true,
        error: null
      }
    }

    case (successAction(GET_COLUMNS)): {
      return {
        data: action.payload,
        loading: false,
        error: null
      };
    }

    case (failedAction(GET_COLUMNS)): {
      return {
        data: [],
        loading: false,
        error: action.error
      };
    }

    default: return state;
  }
}