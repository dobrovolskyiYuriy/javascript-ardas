import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

function Column(props) {
  const { cards, title, color, onAddCard } = props;

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
      <div className='column-cards'>
        {cards.map(({ id, title }) =>
          <Card key={id} id={id} title={title} />)}
      </div>
    </div>
  );
}

Column.propTypes = {
  cards: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onAddCard: PropTypes.func.isRequired
};

export default Column;