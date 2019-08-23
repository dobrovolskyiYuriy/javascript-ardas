import React from 'react';
import PropTypes from 'prop-types';

function Card({ title }) {
  return (
    <div className='card'>
      <p className='card-title'>{title}</p>
      <img className='card-remove' alt='card-remove' src='img/removeCard.png' />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired
};

export default Card;