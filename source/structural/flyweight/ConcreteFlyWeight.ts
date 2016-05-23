import {FlyWeight} from "./FlyWeight";

export class ConcreteFlyWeight implements FlyWeight {
    private intrinsicState: string;
    
    operation(extrinsicState: string): void {
        
    }
}