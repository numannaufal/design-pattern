import {Pizza} from "../abstract/Pizza";
import {OriginalBread} from "../../product/concrete/OriginalBread";
import {CheeseTopping} from "../../product/concrete/CheeseTopping";
import {CheeseRim} from "../../product/concrete/CheeseRim";

export class CheesePizza extends Pizza {
    constructor() {
        super();
        console.log('making cheese pizza');
    }
    protected makeBread(): void {
        this.bread = new OriginalBread();
    }
    protected makeTopping():void {
        this.topping =  new CheeseTopping();
    }
    protected makeRim(): void {
        this.rim =  new CheeseRim();
    }
    
}