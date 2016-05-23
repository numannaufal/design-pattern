import {Subject} from "./Subject";

export class RealSubject implements Subject {
    constructor() {
        console.log('let say initiate this is heavy initialization');
    }
    
    public request() {
        console.log('request');
    }
}