export function typeDecorator(func, ...typeCheckFunc) {
    return (...arg) => {
        for (let i = 0; i < arg.length; i++) {
            if (!typeCheckFunc[i](arg[i])) {
                throw new TypeError(`The argument ${i + 1} has incorrect type`);
            }
        }

        return func.apply(this, arg);
    };
}

export default {
    typeDecorator
};