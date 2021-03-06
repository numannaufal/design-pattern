import {Colleague} from "./Colleague";
import {Mediator} from "./Mediator";

export class ConcreteColleague2 implements Colleague {
    public mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    action(): void {
        console.log('an action by c2');
    }
}