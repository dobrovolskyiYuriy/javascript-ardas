import axios from 'axios';

import {
    onAddCard,
    onDragOver,
    onDrop,
    onDragEnd
} from './columnEvents';
import { isColumn, isHTMLElement } from '../checkType';
import { typeDecorator } from '../decorators';

function getColumns() {
    return axios
        .get('/api/column')
        .then(res => res.data);
}

function render(column, inElem) {
    const { id, title, color } = column;

    const columnElem = document.createElement('div');
    columnElem.id = id;
    columnElem.className = 'column';
    columnElem.style.backgroundColor = color;

    const columnHeader = document.createElement('header');
    columnHeader.className = 'column-header';

    const columnTitle = document.createElement('h3');
    columnTitle.append(title);

    const imgAddCard = document.createElement('img');
    imgAddCard.className = 'add-card';
    imgAddCard.src = 'img/addCard.png';
    imgAddCard.addEventListener('click', onAddCard);

    const columnSectionCards = document.createElement('div');
    columnSectionCards.className = 'cards';
    columnSectionCards.addEventListener('dragover', onDragOver);
    columnSectionCards.addEventListener('drop', onDrop);
    columnSectionCards.addEventListener('dragend', onDragEnd)

    columnHeader.append(columnTitle);
    columnHeader.append(imgAddCard);
    columnElem.append(columnHeader);
    columnElem.append(columnSectionCards);

    inElem.append(columnElem);
}

render = typeDecorator(render, isColumn, isHTMLElement);

export default {
    getColumns,
    render
};