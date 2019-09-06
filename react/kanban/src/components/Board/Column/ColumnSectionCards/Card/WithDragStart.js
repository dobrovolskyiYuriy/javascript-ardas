import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dragStart } from '../../../../../store/actions/dragAndDrop';

import { compose } from 'redux';

const DragStartContainer = connect(null, { dragStart });

const WithDragStart = WrappedComponent =>
  class WithDragStart extends React.Component {
    static propTypes = {
      card: PropTypes.shape({
        id: PropTypes.number.isRequired
      }).isRequired,
      dragStart: PropTypes.func.isRequired
    };

    handleDragStart = () =>
      this.props.dragStart(this.props.card.id);

    render() {
      const { dragStart, ...props } = this.props;
      return <WrappedComponent
        {...props}
        draggable={true}
        onDragStart={this.handleDragStart} />;
    }
  }

export default compose(
  DragStartContainer,
  WithDragStart
);