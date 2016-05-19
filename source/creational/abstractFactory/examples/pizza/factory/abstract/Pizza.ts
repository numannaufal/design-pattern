import {Bread} from "../../product/abstract/Bread";
import {Topping} from "../../product/abstract/Topping";
import {Rim} from "../../product/abstract/Rim";

export abstract class Pizza {
    protected bread;
    protected topping;
    protected rim;
    
    constructor() {
        console.log('Pizza abstraction: a Pizza must consist: bread, topping, and rim. Make sure you dont miss one');
        this.makeBread();
        this.makeTopping();
        this.makeRim();
    }
    protected abstract makeBread(): void;
    protected abstract makeTopping(): void;
    protected abstract makeRim(): void;
}