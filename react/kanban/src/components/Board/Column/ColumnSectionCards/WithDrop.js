import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSelectedDragAndDrop } from '../../../../store/selectors/dragAndDrop';
import { drop } from '../../../../store/actions/dragAndDrop';

import { compose } from 'redux';

const mapStateToProps = state => ({
  dragedCardId: getSelectedDragAndDrop(state).dragedCardId
});

const DropContainer = connect(
  mapStateToProps,
  { drop }
);

const WithDrop = WrappedComponent =>
  class WithDrop extends React.Component {
    static propTypes = {
      dragedCardId: PropTypes.number,
      drop: PropTypes.func.isRequired,
      columnId: PropTypes.number.isRequired
    };

    handleDragOver = event =>
      event.preventDefault();

    handleDrop = () => {
      const { drop, dragedCardId, columnId } = this.props;
      drop(dragedCardId, columnId);
    };

    render() {
      const { drop, dragedCardId, ...props } = this.props;
      return <WrappedComponent
        {...props}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop} />;
    }
  }

export default compose(
  DropContainer,
  WithDrop
);