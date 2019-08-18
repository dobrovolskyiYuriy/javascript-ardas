export function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

export function isString(str) {
    return typeof str === 'string';
}

export function isHTMLElement(elem) {
    return elem instanceof HTMLElement;
}

export function isColumn(column) {
    try {
        const {id, title, color} = column;

        return (
            isNumeric(id)   &&
            isString(title) && 
            isString(color)
        );
    } catch(error) {
        return false;
    }
}

export function isCard(card) {
    try {
        const {id, title, columnId} = card;

        return (
            isNumeric(id)   &&
            isString(title) &&
            isNumeric(columnId)
        );
    } catch(error) {
        return false;
    }
}

export function isObject(obj) {
    return typeof obj === 'object';
}

export default {
    isNumeric,
    isString,
    isHTMLElement,
    isColumn,
    isCard,
    isObject
};