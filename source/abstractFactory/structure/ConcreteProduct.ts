import {AbstractProduct} from "./AbstractProduct";

export class ConcreteProduct extends AbstractProduct {
    constructor(name: String) {
        super(name);
    }
}