import { connect } from 'react-redux';
import { drop } from '../../../store/actions/dragAndDrop';
import { getSelectedDragAndDrop } from '../../../store/selectors/dragAndDrop';

function mapStateToProps(state) {
  return {
    dragedCardId: getSelectedDragAndDrop(state).dragedCardId
  };
}

export default connect(mapStateToProps, { drop });