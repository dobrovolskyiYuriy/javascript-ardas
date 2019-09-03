import React from 'react';

export default WrappedComponent =>
  function WithDragStart({dragStart, ...props}) {
    return <WrappedComponent
      {...props}
      draggable={true}
      onDragStart={cardId => dragStart(cardId)} />;
  }