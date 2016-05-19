import {Topping} from "../abstract/Topping";

export class MeatTopping extends Topping {
    constructor() {
        super();
        console.log('Making meat topping');
    }
}