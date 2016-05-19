import {AbstractBuilder} from "./AbstractBuilder";
import {Product} from "./Product"; 

export class ConcreteBuilder extends AbstractBuilder {
        protected product: Product;
        
        constructor() {
            super();
            this.product = new Product();
        }
        
        public buildProductA() {
            this.product.addProcess(' a ');
        }
        
        public buildProductB() {
            this.product.addProcess(' b ');
        }
        
        public getProduct(): Product {
            return this.product;
        }
}