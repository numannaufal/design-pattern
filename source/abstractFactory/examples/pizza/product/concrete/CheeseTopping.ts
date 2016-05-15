import {Topping} from "../abstract/Topping";

export class CheeseTopping extends Topping {
    constructor() {
        super();
        console.log('Making Cheese topping');
    }
}