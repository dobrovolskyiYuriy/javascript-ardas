import axios from 'axios';

const kanban = axios.create({
  baseURL: 'http://localhost:8089/api/'
});

export function updateCard(cardId, updatedCardProps) {
  return kanban({
    method: 'patch',
    url: `card/${cardId}`,
    data: updatedCardProps
  })
    .then(res => res.data);
}

export function addCard(newCard) {
  return kanban({
    method: 'post',
    url: `card`,
    data: newCard
  })
    .then(res => res.data);
}

export function deleteCard(cardId) {
  return kanban.delete(`card/${cardId}`)
    .then(res => res.data);
}

export function getColumns() {
  return kanban.get(`column`)
    .then(res => res.data);
}

export function getCards() {
  return kanban.get(`card`)
    .then(res => res.data);
}