import axios from 'axios';

const api = 'http://localhost:8089/api';

export function getBoard() {
  return getColumns()
    .then(columns => { 
      return getCards()
        .then(cards => ({ columns, cards }));
     });
}

export function getColumns() {
  return axios.get(`${api}/column`)
    .then(res => res.data);
}

export function getCards() {
  return axios.get(`${api}/card`)
    .then(res => res.data);
}