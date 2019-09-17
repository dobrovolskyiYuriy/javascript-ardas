import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function CardEdit({ card, onEdit, updateCard }) {
  const { id, title } = card;

  const [newTitle, setNewTitle] = useState(title);
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
    inputEl.current.select();
  }, [title]);

  const handleChange = event =>
    setNewTitle(event.target.value);

  const handleMouseDown = event =>
    event.preventDefault();

  const handleApplyEdit = event => {
    handleMouseDown(event);
    if (newTitle && newTitle !== title) {
      updateCard(id, { title: newTitle });
    }
    onEdit();
  }

  const handleKeyDown = event => {
    // enter
    if (event.keyCode === 13) {
      handleApplyEdit(event);
    }
    // esc
    if (event.keyCode === 27) {
      onEdit();
    }
  }

  return (
    <>
      <input
        className='card-title'
        value={newTitle}
        onChange={handleChange}
        onBlur={onEdit}
        onKeyDown={handleKeyDown}
        ref={inputEl}
      />
      <div className='card-icons'>
        <img
          alt='cancel-edit'
          className='card-icon'
          src='img/cancelEdit.jpg'
          draggable={false}
        />
        <img
          alt='apply-edit'
          className='card-icon'
          src='img/applyEdit.png'
          draggable={false}
          onMouseDown={handleApplyEdit}
        />
      </div>
    </>
  );
}

CardEdit.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  updateCard: PropTypes.func.isRequired
};

export default CardEdit;