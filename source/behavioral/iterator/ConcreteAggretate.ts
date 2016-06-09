import {Aggregate} from "./Aggregate";
import {Iterator} from "./Iterator";
import {ConcreteIterator} from "./ConcreteIterator";

export class ConcreteAggregate implements Aggregate {
    private iterator: Iterator;

    createIterator(): void {
        this.iterator = new ConcreteIterator();
    }
}