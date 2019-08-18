import Card from '../card';

export function onAddCard(event) {
  const column = event.target.closest('.column');
  const columnSectionCards = column.querySelector('.cards');
  const columnId = column.id;
  const title = prompt('Text card:', 'New Card');

  if (!title) {
    return;
  }

  (async () => {
    try {
      const newCard = await Card.add(columnId, title);
      Card.render(newCard, columnSectionCards);
    } catch(error) {
      alert(error);
    }
  })();
}

export function onDragOver(event) {
  event.preventDefault();

  const shadowElem = document.getElementById('shadow');
  if (!shadowElem) {
    return;
  }
  const columnSectionCards = event.target.closest('.cards');

  const insertBefore = getBlockToInsertBefore(event.clientY, columnSectionCards);

  if (insertBefore) {
    insertBefore.before(shadowElem);
  } else {
    columnSectionCards.append(shadowElem);
  }
}

export async function onDrop(event) {
  const cardId = +event.dataTransfer.getData('cardId');

  if (!cardId) {
    return;
  }

  const cardElem = document.querySelector(`[data-card-id="${cardId}"]`);
  const columnSectionCards = event.target.closest('.cards');
  const insertBefore = getBlockToInsertBefore(event.clientY, columnSectionCards);
  const columnId = event.target.closest('.column').id;
  Card.update(cardId, { columnId })
    .then(() => {
      if (insertBefore) {
        insertBefore.before(cardElem);
      } else {
        columnSectionCards.append(cardElem);
      }
    })
    .catch((error => alert(error)));
}

export function onDragEnd() {
  document.getElementById('shadow').remove();
}

export default {
  onAddCard,
  onDragOver,
  onDrop,
  onDragEnd
};

function getBlockToInsertBefore(y, columnSectionCards) {
  return [...columnSectionCards.querySelectorAll('.card')]
    .filter((element) => {
      const top = element.getBoundingClientRect().top;
      const bot = element.getBoundingClientRect().bottom;
      return (top + (bot - top) / 2) > y;
    })
    .shift();
}