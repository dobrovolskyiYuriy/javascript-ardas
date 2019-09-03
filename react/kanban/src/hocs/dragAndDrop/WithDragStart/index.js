import DragStartContainer from './DragStartContainer';
import WithDragStart from './WithDragStart';

import { compose } from 'redux';

export default compose(
  DragStartContainer,
  WithDragStart
);