import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

function Column(props) {
  const { cards, title, color } = props;

  return (
    <div className='column' style={{background: color}}>
      <div className='column-header'>
        <h3 className='column-header-logo'>{title}</h3>
        <img
          className='column-header-add-card'
          src='img/addCard.png'
          alt='add card'
        />
      </div>
      <div className='column-cards'>
        {cards.map(({ id, title }) =>
          <Card key={id} title={title} />)}
      </div>
    </div>
  );
}

Column.propTypes = {
  cards: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Column;