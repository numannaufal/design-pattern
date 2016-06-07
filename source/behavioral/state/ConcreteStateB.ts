import {State} from "./State";

export class ConcreteStateB implements State {
    handle(): void {
         console.log('custom handle behavior by state b');
    }
}