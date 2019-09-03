import './Column.css';
import Column from './Column';
import ColumnContainer from './ColumnContainer';
import WithColumn from './WithColumn';

import { compose } from 'redux';

export default compose(
  ColumnContainer,
  WithColumn
)(Column);