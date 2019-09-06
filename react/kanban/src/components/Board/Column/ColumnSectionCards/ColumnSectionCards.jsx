import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import Error from '../../../Error';
import Loading from '../../../Loading';

function ColumnSectionCards({ cards, columnId, ...props }) {
  const { data, error, loading } = cards;

  let render;
  if (loading) {
    render = <Loading className='column-section-cards-loading' />;
  } else if (error) {
    render = <Error error={error} />
  } else {
    render = data.map(card =>
      <Card key={card.id} card={card} />);
  }

  return (
    <div className='column-section-cards' {...props}>
      {render}
    </div>
  );
}

ColumnSectionCards.propTypes = {
  cards: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        columnId: PropTypes.number.isRequired
      }).isRequired
    ).isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired
  }).isRequired,
  columnId: PropTypes.number.isRequired
};

export default ColumnSectionCards;