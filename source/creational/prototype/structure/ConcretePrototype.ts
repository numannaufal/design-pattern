import {AbstractPrototype} from "./AbstractPrototype";
export class ConcretePrototype extends AbstractPrototype{
    private name;
    
    constructor() {
        super();
    }
   
    public clone(): any {
        let clonedObject = Object.assign(this);  
        return clonedObject;
    }
    
    public setName(name) {
        this.name = name;
    }
}