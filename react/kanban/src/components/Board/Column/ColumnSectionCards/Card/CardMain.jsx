import React from 'react';
import PropTypes from 'prop-types';

function CardMain({ card, onEdit, deleteCard }) {
  const handleDelete = () =>
    deleteCard(card.id);

  return (
    <>
      <p className='card-title'>{card.title}</p>
      <div className='card-icons'>
        <img
          alt='remove-card'
          className='card-icon'
          src='img/removeCard.png'
          draggable={false}
          onClick={handleDelete}
        />
        <img
          alt='edit-card'
          className='card-icon'
          src='img/editCard.png'
          draggable={false}
          onClick={onEdit}
        />
      </div>
    </>
  );
}

CardMain.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default CardMain;