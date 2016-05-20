import {Abstraction} from "./Abstraction";
import {Implementor} from "./Implementor";

export class RefinedAbstraction extends Abstraction {
    constructor(implementorAPI: Implementor) {
        super(implementorAPI);
    }
    
    public operation(): void {
        console.log(this.implementorAPI);
        this.implementorAPI.operationImp(); 
    }
    
}