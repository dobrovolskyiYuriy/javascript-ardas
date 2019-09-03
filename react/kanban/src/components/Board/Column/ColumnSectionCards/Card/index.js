import './Card.css';
import Card from './Card';
import CardContainer from './CardContainer';
import WithDragStart from '../../../../../hocs/dragAndDrop/WithDragStart';

import { compose } from 'redux';

export default compose(
  WithDragStart,
  CardContainer
)(Card);