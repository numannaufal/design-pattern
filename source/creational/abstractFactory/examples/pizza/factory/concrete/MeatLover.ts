import {Pizza} from "../abstract/Pizza";
import {OriginalBread} from "../../product/concrete/OriginalBread";
import {MeatTopping} from "../../product/concrete/MeatTopping";
import {MeatRim} from "../../product/concrete/MeatRim";

export class MeatLover extends Pizza {
    constructor() {
        super();
        console.log('making meat lover');
    }
    protected makeBread(): void {
        this.bread = new OriginalBread();
    }
    protected makeTopping(): void{
        this.topping = new MeatTopping();
    }
    protected makeRim(): void {
        this.rim = new MeatRim();
    }
    
}