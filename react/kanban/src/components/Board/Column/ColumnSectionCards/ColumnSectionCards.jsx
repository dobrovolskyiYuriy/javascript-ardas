import React from 'react';
import PropTypes from 'prop-types';

function ColumnSectionCards({ children, columnId, drop, ...props }) {
  return <div
    className='column-section-cards'
    onDrop={() => drop(columnId)}
    {...props}>{children}</div>;
}

ColumnSectionCards.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  columnId: PropTypes.number,
  drop: PropTypes.func
};

export default ColumnSectionCards;