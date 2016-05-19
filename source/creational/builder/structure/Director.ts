import {AbstractBuilder} from "./AbstractBuilder";
import {ConcreteBuilder} from "./ConcreteBuilder";

export class Director {
    constructor() {}
    
    public static createProductAB(builder: AbstractBuilder) {
        builder.buildProductA();
        builder.buildProductB();
    }
    
    public static createProductBA(builder: AbstractBuilder) {
        builder.buildProductB();
        builder.buildProductA();
    }
}