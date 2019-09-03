import './ColumnSectionCards.css';
import ColumnSectionCards from './ColumnSectionCards';
import ColumnSectionCardsContainer from './ColumnSectionCardsContainer';
import WithColumnSectionCards from './WithColumnSectionCards';
import WithDrop from '../../../../hocs/dragAndDrop/WithDrop';

import { compose } from 'redux';

export default compose(
  WithDrop,
  ColumnSectionCardsContainer,
  WithColumnSectionCards
)(ColumnSectionCards);