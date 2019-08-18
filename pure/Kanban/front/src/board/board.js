import Column from '../column';
import Card from '../card';
import { isHTMLElement } from '../checkType';
import { typeDecorator } from '../decorators';


// Не использую createDocumentFragment т. к. в современных браузерах такой способ работает
// медленее чем вставка в DOM по элементам
async function render(inElem) {
    const columnArray = await Column.getColumns();
    const cardArray = await Card.getCards();

    for (let i = 0; i < columnArray.length; i++) {
        Column.render(columnArray[i], inElem);
    }

    for (let i = 0; i < cardArray.length; i++) {
        const columnDOM = document.getElementById(cardArray[i].columnId);
        const columnSectionCards = columnDOM.querySelector('.cards');
        Card.render(cardArray[i], columnSectionCards);
    }
}

render = typeDecorator(render, isHTMLElement);

export default {
    render
};