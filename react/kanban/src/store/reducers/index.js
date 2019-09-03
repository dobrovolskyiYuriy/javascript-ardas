import { combineReducers } from 'redux';

import column from './column';
import card from './card';
import dragAndDrop from './dragAndDrop'

export default combineReducers({
  column,
  card,
  dragAndDrop
});