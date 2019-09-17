export const getSelectedCards = (state, columnId) => {
  const cards = getCardsForColumn(state.card.data, columnId);
  return {
    ...state.card,
    data: cards
  };
}

function getCardsForColumn(cards, columnId) {
  return cards.filter(card => card.columnId === columnId);
}