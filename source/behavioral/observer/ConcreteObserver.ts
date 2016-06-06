import {Observer} from "./Observer";

export class ConcreteObserver implements Observer {
    private observerState: string;
    
    constructor() { }
    
    update(subjectState: string): void {
        this.observerState = subjectState;
    }
}