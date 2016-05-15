import {AbstractFactory} from "./AbstractFactory";
import {ConcreteProduct} from "./ConcreteProduct";

export class ConcreteFactory extends AbstractFactory {
    constructor() {
        super();
        console.log('this is concrete factory');   
    }
    
    createProduct(): ConcreteProduct {
        console.log('creating product');
        let concreteProduct: ConcreteProduct = new ConcreteProduct('product A');
        return concreteProduct;
    }
}