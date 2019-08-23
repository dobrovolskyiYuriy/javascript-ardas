import { connect } from 'react-redux';
import { getSelectedColumns } from '../../store/selectors/column';
import { fetchColumns } from '../../store/actions/column';

function mapStateToProps(state) {
  return {
    columns: getSelectedColumns(state)
  };
}

export default connect(mapStateToProps, { fetchColumns })