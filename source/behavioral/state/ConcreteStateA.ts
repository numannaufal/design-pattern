import {State} from "./State";

export class ConcreteStateA implements State {
    handle(): void {
        console.log('custom handle behavior by state a');
    }
}