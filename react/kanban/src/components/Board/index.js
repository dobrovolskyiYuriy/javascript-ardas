import './Board.css';
import Board from './Board';
import WithBoard from './WithBoard';
import BoardContainer from './BoardContainer';

import { compose } from 'redux';

export default compose(
  BoardContainer,
  WithBoard
)(Board);