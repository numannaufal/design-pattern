import {FlyWeight} from "./FlyWeight";

export class UnsharedConcreteFlyWeight implements FlyWeight {
    private allState: string;
    
    operation(extrinsicState: string): void {
        
    }
}