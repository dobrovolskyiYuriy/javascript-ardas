import { GET_CARDS, ADD_CARD, DELETE_CARD, UPDATE_CARD, successAction, failedAction } from '../types';

const initialState = {
  data: [],
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (GET_CARDS): {
      return {
        ...state,
        loading: true
      };
    }

    case (successAction(GET_CARDS)): {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }

    case (failedAction(GET_CARDS)): {
      return {
        ...state,
        error: action.error,
        loading: false
      };
    }

    case (successAction(ADD_CARD)): {
      return {
        ...state,
        data: action.payload
      };
    }

    case (successAction(DELETE_CARD)): {
      return {
        ...state,
        data: action.payload
      };
    }

    case (successAction(UPDATE_CARD)): {
      return {
        ...state,
        data: action.payload
      };
    }

    default: return state;
  }
};