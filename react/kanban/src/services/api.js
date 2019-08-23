import axios from 'axios';

const api = 'http://localhost:8089/api';

export function getColumns() {
  return axios.get(`${api}/column`)
    .then(res => res.data);
}