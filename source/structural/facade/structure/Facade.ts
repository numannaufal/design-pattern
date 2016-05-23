import {SubSystemA} from "./SubSystemA";
import {SubSystemB} from "./SubSystemB";
import {SubSystemC} from "./SubSystemC";

export class Facade {
    private subSystemA: SubSystemA;
    private subSystemB: SubSystemA;
    private subSystemC: SubSystemA;
   
    constructor() {
        this.subSystemA = new SubSystemA();
        this.subSystemB = new SubSystemB();
        this.subSystemC = new SubSystemC();    
    }
    
    public process(): void {
        this.subSystemA.processSomething();
        this.subSystemB.processSomething();
        this.subSystemC.processSomething();
    }
}