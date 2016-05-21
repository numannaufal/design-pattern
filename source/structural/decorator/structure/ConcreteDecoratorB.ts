import {Component} from "./Component";
import {Decorator} from "./Decorator";

export class ConcreteDecoratorB extends Decorator {

    constructor(component: Component) {
        super(component);
        this.addDecoration();
    }

    public addDecoration() {
        this.component.receiveDecoration('added decorationB');
    }
}