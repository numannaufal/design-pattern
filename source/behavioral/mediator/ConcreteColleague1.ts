import {Colleague} from "./Colleague";
import {Mediator} from "./Mediator";

export class ConcreteColleague1 implements Colleague {
    public mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    action():void {
        console.log('an action from c1');
        this.mediator.colleague2.action();
    }
}