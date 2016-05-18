import {Product} from "./Product"; 

export abstract class AbstractBuilder {
    protected product: Product;
    constructor() {};
    public abstract buildProductA(): void;
    public abstract buildProductB(): void;
    public abstract getProduct(): Product;
}