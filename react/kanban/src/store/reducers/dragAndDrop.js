import { DRAG_START } from '../types';

const initialState = {
  dragedCardId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (DRAG_START): {
      return {
        dragedCardId: action.payload
      };
    }

    default: return state;
  }
}