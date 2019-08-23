import React from 'react';
import PropTypes from 'prop-types';

function Column(props) {
  const { title, color, id } = props;

  return (
    <div className='column' id={id} style={{background: color}}>
      <div className='column-header'>
        <h3 className='column-header-logo'>{title}</h3>
        <img
          className='column-header-add-card'
          src='img/addCard.png'
          alt='add card'
        />
      </div>
      <div className='column-cards'></div>
    </div>
  );
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Column;