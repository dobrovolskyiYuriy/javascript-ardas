import React from 'react';
import PropTypes from 'prop-types';

function Card({ id, title, deleteCard, onDragStart, ...props }) {
  return (
    <div className='card' onDragStart={() => onDragStart(id)} {...props}>
      <p className='card-title'>{title}</p>
      <img
        className='card-remove'
        alt='card-remove'
        src='img/removeCard.png'
        onClick={() => deleteCard(id)}
      />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
  onDragStart: PropTypes.func
};

export default Card;