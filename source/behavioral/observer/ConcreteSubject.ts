import {Subject} from "./Subject";
import {Observer} from "./Observer";

export class ConcreteSubject implements Subject {
    private observers: Observer[];
    private subjectState: string;

    constructor() { }

    attach(observer: Observer): void {
        this.observers.push(observer);
    }
    
    detach(observer: Observer): void {
        // remove observer from observers
    }
    
    notify(): void {
        this.observers.forEach((observer) => {
            observer.update(this.subjectState);
        });
    }
    
    setState(newState: string): void {
        this.subjectState = newState;
    }
}