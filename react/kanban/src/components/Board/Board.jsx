import React from 'react';
import PropTypes from 'prop-types';

function Board({ render }) {
  console.log('render');
  return (
    <div className='board'>
      {render}
    </div>
  );
}

Board.propTypes = {
  render: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default Board;