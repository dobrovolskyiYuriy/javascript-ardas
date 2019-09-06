import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardMain from './CardMainContainer';
import CardEdit from './CardEditContainer';

function Card({ card, ...props }) {
  const { id, title } = card;

  const [onEdit, setOnEdit] = useState(false);

  const handleEdit = () =>
    setOnEdit(!onEdit);

  return (
    <div className='card' {...props}>
      {onEdit
        ? <CardEdit card={{ id, title }} onEdit={handleEdit} />
        : <CardMain card={{ id, title }} onEdit={handleEdit} />}
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    columnId: PropTypes.number.isRequired
  }).isRequired
};

export default Card;