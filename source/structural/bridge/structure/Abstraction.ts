import {Implementor} from "./Implementor";

export abstract class Abstraction {
    protected implementorAPI: Implementor;
    
    constructor(implementorAPI: Implementor) {
        this.implementorAPI = implementorAPI;    
    }
    
    operation(): void {};
}