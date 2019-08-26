import './Column.css';
import Column from './Column';
import WithColumn from './WithColumn';
import ColumnContainer from './ColumnContainer';

import { compose } from 'redux';

export default compose(
  ColumnContainer,
  WithColumn
)(Column);