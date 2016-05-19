import {AbstractFactory} from "./AbstractFactory";
import {AbstractProduct} from "./AbstractProduct";
import {ConcreteFactory} from "./ConcreteFactory";

export class Client {
    constructor() {
        console.log('this is client');
        let concreteFactory: AbstractFactory = new ConcreteFactory();
        let product: AbstractProduct = concreteFactory.createProduct();
        console.log(product);
    }
}

new Client();