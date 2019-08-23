import { successAction, failedAction, GET_BOARD } from '../types';

const initialState = {
  data: {
    columns: [],
    cards: []
  },
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (GET_BOARD): {
      return {
        ...state,
        loading: true
      }
    }

    case (successAction(GET_BOARD)): {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }

    case (failedAction(GET_BOARD)): {
      return {
        ...state,
        error: action.error,
        loading: false
      };
    }

    default: return state;
  }
}