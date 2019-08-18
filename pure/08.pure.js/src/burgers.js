class SizeTemplate {
    constructor(size) {
        this.price = size.price;
        this.kCalories = size.kCalories;
    }
}

class SauceTemplate extends SizeTemplate {
    constructor(sauce) {
        super(sauce);
        this.name = sauce.name;
    }
}

class DefaultSauce extends SauceTemplate {
    constructor(sauce) {
        super(sauce);
    }
}

class Burger {
    constructor(size) {
        if (!(size instanceof SizeTemplate)) {
            throw new TypeError();
        }

        this.price = size.price;
        this.kCalories = size.kCalories;
        this.sauces = [];
    }

    addSauce(sauce) {
        if (!(sauce instanceof SauceTemplate)) {
            throw new TypeError();
        }

        if (this.sauces.includes(sauce.name)) {
            return null;
        }

        this.price += sauce.price;
        this.kCalories += sauce.kCalories;
        this.sauces.push(sauce.name);

        return sauce;
    }

    removeSauce(sauce) {
        if (!(sauce instanceof SauceTemplate)) {
            throw new TypeError();
        }

        if (!this.sauces.includes(sauce.name)) {
            return null;
        }

        this.price -= sauce.price;
        this.kCalories -= sauce.kCalories;
        const index = this.sauces.indexOf(sauce.name);
        this.sauces.splice(index, 1);

        return sauce;
    }

    getPrice() {
        return this.price;
    }

    getCalories() {
        return this.kCalories;
    }

    static get SAUCE_MAYO() {
        return new DefaultSauce({name: 'moyo', price: 5, kCalories: 30});
    }

    static get SAUCE_MUSTARD() {
        return new DefaultSauce({name: 'mustard', price: 5, kCalories: 35});
    }
}

class HamburgerSize extends SizeTemplate {
    constructor(size) {
        super(size);
    }
}

class HamburgerSauce extends SauceTemplate {
    constructor(sauce) {
        super(sauce);
    }
}

export class Hamburger extends Burger {
    constructor(size) {
        if (!(size instanceof HamburgerSize)) {
            throw new TypeError();
        }

        super(size);
    }

    addSauce(sauce) {
        if (!(sauce instanceof HamburgerSauce) && !(sauce instanceof DefaultSauce)) {
            throw new TypeError();
        }

        super.addSauce(sauce);
    }

    removeSauce(sauce) {
        if (!(sauce instanceof HamburgerSauce) && !(sauce instanceof DefaultSauce)) {
            throw new TypeError();
        }

        super.removeSauce(sauce);
    }

    static get SIZE_SMALL() {
        return new HamburgerSize({price: 30, kCalories: 200});
    }

    static get SIZE_BIG() {
        return new HamburgerSize({price: 50, kCalories: 320});
    }
}

class CheeseburgerSize extends SizeTemplate {
    constructor(size) {
        super(size);
    }
}


class CheeseburgerSauce extends SauceTemplate {
    constructor(sauce) {
        super(sauce);
    }
}

export class Cheeseburger extends Burger {
    constructor(size) {
        if (!(size instanceof CheeseburgerSize)) {
            throw new TypeError();
        }

        super(size);
    }

    addSauce(sauce) {
        if (!(sauce instanceof CheeseburgerSauce) && !(sauce instanceof DefaultSauce)) {
            throw new TypeError();
        }

        super.addSauce(sauce);
    }

    removeSauce(sauce) {
        if (!(sauce instanceof CheeseburgerSauce) && !(sauce instanceof DefaultSauce)) {
            throw new TypeError();
        }

        super.removeSauce(suce);
    }

    static get SIZE_SMALL() {
        return new CheeseburgerSize({price: 40, kCalories: 250});
    }

    static get SIZE_BIG() {
        return new CheeseburgerSize({price: 70, kCalories: 400});
    }

    static get SAUCE_TARTAR() {
        return new CheeseburgerSauce({name: 'tartar', price: 7, kCalories: 37});
    }
}