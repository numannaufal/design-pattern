import {AbstractProduct} from "./AbstractProduct";

export abstract class AbstractCreator {
    constructor() {}
    public abstract factoryMethod(objectName: string): AbstractProduct;
}