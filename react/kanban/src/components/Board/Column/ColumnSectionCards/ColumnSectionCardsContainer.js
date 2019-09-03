import { connect } from 'react-redux';
import { getSelectedCards } from '../../../../store/selectors/card';

function mapStateToProps(state, ownProps) {
  return {
    cards: getSelectedCards(state, ownProps.columnId)
  };
}

export default connect(mapStateToProps, {});