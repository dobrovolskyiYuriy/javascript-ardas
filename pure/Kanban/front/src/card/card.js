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
    isString,
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

function add(columnId, title = 'New Card') {
    return axios({
        method: 'post',
        url: '/api/card',
        data: {
            title,
            columnId
        }
    })
        .then(res => res.data);
}

function update(cardId, data) {
    return axios({
        method: 'patch',
        url: `/api/card/${cardId}`,
        data
    })
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
    imgRemoveCard.addEventListener('click', onRemoveCard);
    imgRemoveCard.addEventListener('mouseover', onMouseOverRemove);
    imgRemoveCard.addEventListener('mouseout', onMouseOutRemove);
    imgRemoveCard.addEventListener('dragstart', event => event.stopPropagation());

    cardElem.append(titleCard);
    cardElem.append(imgRemoveCard);

    inElem.append(cardElem);
}

remove = typeDecorator(remove, isNumeric);
add = typeDecorator(add, isNumeric, isString);
render = typeDecorator(render, isCard, isHTMLElement);
update = typeDecorator(update, isNumeric, isObject);

export default {
    getCards,
    remove,
    add,
    update,
    render
};