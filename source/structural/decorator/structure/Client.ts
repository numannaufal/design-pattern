import {Component} from "./Component";
import {ConcreteComponent} from "./ConcreteComponent";
import {Decorator} from "./Decorator"; 
import {ConcreteDecoratorA} from "./ConcreteDecoratorA";
import {ConcreteDecoratorB} from "./ConcreteDecoratorB";

class Client {
    public static main(): void {
        let component: Component = new ConcreteDecoratorB(
                                        new ConcreteDecoratorA(
                                             new ConcreteComponent('a component')));

    }
}