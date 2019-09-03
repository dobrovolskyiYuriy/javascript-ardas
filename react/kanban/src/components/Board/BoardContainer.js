import { connect } from 'react-redux';
import { getSelectedColumns } from '../../store/selectors/column';
import { getBoard } from '../../store/actions/board';

function mapStateToProps(state) {
  return {
    columns: getSelectedColumns(state)
  };
}

export default connect(mapStateToProps, { getBoard });