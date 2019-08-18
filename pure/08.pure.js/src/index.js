import { Hamburger, Cheeseburger } from './burgers';

const burger1 = new Hamburger(Hamburger.SIZE_SMALL);
burger1.addSauce(Hamburger.SAUCE_MAYO);
burger1.addSauce(Hamburger.SAUCE_MUSTARD);

console.log(burger1.getPrice()); // -> 40

burger1.removeSauce(Hamburger.SAUCE_MAYO);

console.log(burger1.getPrice()); // -> 35
console.log(burger1.getCalories()); // -> 235

const burger2 = new Cheeseburger(Cheeseburger.SIZE_BIG);
burger2.addSauce(Cheeseburger.SAUCE_TARTAR);

console.log(burger2.getPrice()); // -> 77
console.log(burger2.getCalories()); // -> 437