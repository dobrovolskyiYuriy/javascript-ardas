import React from 'react';
import PropTypes from 'prop-types';

import ColumnSectionCards from './ColumnSectionCards';

function Column({ id, title, color, onAddCard }) {
  return (
    <div className='column' style={{background: color}}>
      <div className='column-header'>
        <h3 className='column-header-logo'>{title}</h3>
        <img
          className='column-header-add-card'
          src='img/addCard.png'
          alt='add card'
          onClick={onAddCard}
        />
      </div>
      <ColumnSectionCards columnId={id} />
    </div>
  );
}

Column.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onAddCard: PropTypes.func.isRequired
};

export default Column;