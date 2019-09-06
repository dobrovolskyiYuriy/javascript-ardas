import { connect } from 'react-redux';
import { getSelectedCards } from '../../../../store/selectors/card';

import ColumnSectionCards from './ColumnSectionCards';

function mapStateToProps(state, ownProps) {
  return {
    cards: getSelectedCards(state, ownProps.columnId)
  };
}

export default connect(mapStateToProps, {})(ColumnSectionCards);