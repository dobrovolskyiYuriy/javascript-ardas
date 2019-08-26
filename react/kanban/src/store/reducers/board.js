import { successAction, failedAction, GET_BOARD, DELETE_CARD, ADD_CARD } from '../types';

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

    case (successAction(DELETE_CARD)): {
      return {
        data: {
          ...state.data,
          cards: action.payload
        },
        error: null,
        loading: false
      };
    }

    case (successAction(ADD_CARD)): {
      return {
        data: {
          ...state.data,
          cards: action.payload
        },
        error: null,
        loading: false
      };
    }

    default: return state;
  }
}