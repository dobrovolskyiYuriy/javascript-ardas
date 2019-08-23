import { GET_BOARD } from '../types';

export function fetchBoard() {
  return {
    type: GET_BOARD
  };
}