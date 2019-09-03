import React from 'react';

export default WrappedComponent =>
  class WithDrop extends React.Component {
    dragOver = event =>
      event.preventDefault();

    drop = columnId =>
      this.props.drop(this.props.dragedCardId, columnId);

    render() {
      const { drop, dragedCardId, ...props } = this.props;
      return <WrappedComponent
        {...props}
        onDragOver={this.dragOver}
        drop={columnId => this.drop(columnId)} />;
    }
  }