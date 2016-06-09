import {Iterator} from "./Iterator";
import {Aggregate} from "./Aggregate";

export class ConcreteIterator implements Iterator {
    private aggregates: Aggregate[];
    private index = 0;

    first(): Aggregate {
        return this.aggregates[0];
    }
    
    next(): Aggregate {
        this.index++;
        return this.aggregates[this.index];
    }

    isDone(): boolean {
        if(this.index >= this.aggregates.length) {
            return true;
        } else {
            return false;
        }
    }

    currentItem(): Aggregate {
        return this.aggregates[this.index];
    }
}