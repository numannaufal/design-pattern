import {Mediator} from "./Mediator";
import {ConcreteMediator} from "./ConcreteMediator";

class Client {
    public static main(): void {
        let mediator: Mediator = new ConcreteMediator();
        mediator.colleague1.action();
    }
}