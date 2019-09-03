import React from 'react';
import PropTypes from 'prop-types';

function Board({ children }) {
  return (
    <div className='board'>
      {children}
    </div>
  );
}

Board.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default Board;