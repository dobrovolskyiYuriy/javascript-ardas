import axios from 'axios';

import {
    onRemoveCard,
    onMouseOutRemove,
    onMouseOverRemove,
    onDragStart,
    onFocus
} from './cardEvents';
import {
    isNumeric,
    isHTMLElement,
    isCard,
    isObject
} from '../checkType';
import { typeDecorator } from '../decorators';

function getCards() {
    return axios.get('/api/card')
        .then(res => res.data);
}

function remove(cardId) {
    axios.delete(`/api/card/${cardId}`);
}

function add(card) {
    return axios.post('/api/card', card)
        .then(res => res.data);
}

function update(cardId, data) {
    return axios.patch(`/api/card/${cardId}`, data);
}

function render(card, inElem) {
    const { id, title } = card;

    const cardElem = document.createElement('div');
    cardElem.className = 'card';
    cardElem.dataset.cardId = id;
    cardElem.draggable = 'true';
    cardElem.addEventListener('dragstart', onDragStart);

    const titleCard = document.createElement('p');
    titleCard.append(title);
    titleCard.contentEditable = true;
    titleCard.addEventListener('focus', onFocus);

    const imgRemoveCard = document.createElement('img');
    imgRemoveCard.className = 'remove-card';
    imgRemoveCard.src = 'img/removeCard.png';
    imgRemoveCard.addEventListener('click', event => onRemoveCard(event));
    imgRemoveCard.addEventListener('mouseover', onMouseOverRemove);
    imgRemoveCard.addEventListener('mouseout', onMouseOutRemove);
    imgRemoveCard.addEventListener('dragstart', event => event.stopPropagation());

    cardElem.append(titleCard);
    cardElem.append(imgRemoveCard);

    inElem.append(cardElem);
}

remove = typeDecorator(remove, isNumeric);
add = typeDecorator(add, isObject);
render = typeDecorator(render, isCard, isHTMLElement);
update = typeDecorator(update, isNumeric, isObject);

export default {
    getCards,
    remove,
    add,
    update,
    render
};