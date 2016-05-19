import {Target} from "./Target"; 
import {Adaptee} from "./Adaptee";

export class Adapter implements Target {
    private adaptee: Adaptee;
    
    constructor() {
        this.adaptee = new Adaptee();
    }
    
    // override
    public request(): void {
        // get instance from adaptee and convert to target
        console.log('specific request take from adaptee');
    }
}