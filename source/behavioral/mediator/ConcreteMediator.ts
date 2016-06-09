import {Mediator} from "./Mediator";
import {Colleague} from "./Colleague";
import {ConcreteColleague1} from "./ConcreteColleague1";
import {ConcreteColleague2} from "./ConcreteColleague2";

export class ConcreteMediator implements Mediator {
    public colleague1: Colleague;
    public colleague2: Colleague;

    constructor() {
        this.colleague1 = new ConcreteColleague1(this);
        this.colleague2 = new ConcreteColleague2(this);
    }
}