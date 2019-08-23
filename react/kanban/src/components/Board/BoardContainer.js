import { connect } from 'react-redux';
import { getSelectedBoard } from '../../store/selectors/board';
import { fetchBoard } from '../../store/actions/board';

function mapStateToProps(state) {
  return {
    board: getSelectedBoard(state)
  };
}

export default connect(mapStateToProps, { fetchBoard })