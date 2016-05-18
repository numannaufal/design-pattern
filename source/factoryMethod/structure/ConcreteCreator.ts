import {AbstractCreator} from "./AbstractCreator";
import {AbstractProduct} from "./AbstractProduct";
import {ConcreteProduct} from "./ConcreteProduct";

export class ConcreteCreator extends AbstractCreator {
    constructor() {
        super();
    }
    public factoryMethod(): AbstractProduct {
        return;
    }
}