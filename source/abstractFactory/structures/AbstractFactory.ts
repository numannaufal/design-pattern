import {AbstractProduct} from "./AbstractProduct";

export abstract class AbstractFactory {
    constructor() {
        console.log('this is abstract factory');
    }
    abstract createProduct(): AbstractProduct;
}