import Card from './card';

export function onRemoveCard(event) {
  const targetCard = event.target.closest('.card');
  const cardId = targetCard.dataset.cardId;

  (async () => {
    try {
      await Card.remove(cardId);
      targetCard.remove();
    } catch (error) {
      alert(error);
    } 
  })();
}

export function onMouseOverRemove(event) {
  event.target.src = 'img/removeCardHover.png';
}

export function onMouseOutRemove(event) {
  event.target.src = 'img/removeCard.png';
}

export function onDragStart(event) {
  const shadowElem = document.createElement('div');
  shadowElem.id = 'shadow';
  event.target.closest('.cards').append(shadowElem);

  event.dataTransfer.setData('cardId', event.target.dataset.cardId);
}

export function onFocus(event) {
  const title = event.target.textContent;
  const cardId = event.target.closest('.card').dataset.cardId;

  event.target.addEventListener('blur', (event) => {
    const newTitle = event.target.textContent;
    if (newTitle === title || !newTitle) {
      event.target.textContent = title;
      return;
    }
    Card.update(cardId, { title: newTitle });
  });

  event.target.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.target.textContent = title;
      event.target.blur();
    }
    if (event.key === 'Enter') {
      const newTitle = event.target.textCountent;
      if (newTitle === title) {
        return;
      }
      Card.update(cardId, { title: newTitle });
      event.target.blur();
    }
  });
}

export default {
  onRemoveCard,
  onMouseOverRemove,
  onMouseOutRemove,
  onDragStart,
  onFocus
};