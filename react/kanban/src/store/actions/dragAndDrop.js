import { DRAG_START, DROP } from '../types';

export function dragStart(dragedCardId) {
  return {
    type: DRAG_START,
    payload: dragedCardId
  };
}

export function drop(dragedCardId, dropColumnId) {
  return {
    type: DROP,
    payload: {
      dragedCardId,
      dropColumnId
    }
  };
}