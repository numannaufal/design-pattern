import {FlyWeight} from "./FlyWeight";
import {ConcreteFlyWeight} from "./ConcreteFlyWeight";
import {UnsharedConcreteFlyWeight} from "./UnsharedConcreteFlyWeight";

export class FlyWeightFactory {
    private flyWeightPool: {};
    
    constructor() {
        this.flyWeightPool = {};
    }
    
    getFlyWeight(key: string): any {
        if(this.flyWeightPool[key]) {
            return this.flyWeightPool[key];
        } else {
            let flyWeight = new ConcreteFlyWeight();
            this.flyWeightPool[key]  = flyWeight;
        }
       
    }
}