import React from 'react';
import PropTypes from 'prop-types';

import ColumnSectionCards from './ColumnSectionCards';

function Column({ column, addCard }) {
  const { id, title, color } = column;
  
  const handleAddCard = () => {
    const title = prompt('Card title:', '');
    title && addCard({ title, columnId: id });
  };

  return (
    <div className='column' style={{background: color}}>
      <div className='column-header'>
        <h3 className='column-header-logo'>{title}</h3>
        <img
          className='column-header-add-card'
          src='img/addCard.png'
          alt='add card'
          draggable={false}
          onClick={handleAddCard}
        />
      </div>
      <ColumnSectionCards columnId={id} />
    </div>
  );
}

Column.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  addCard: PropTypes.func.isRequired
};

export default Column;