import {Subject} from "./Subject";
import {RealSubject} from "./RealSubject";

export class Proxy implements Subject {
    private realSubject: RealSubject;
        
    public request() {
        console.log('this is light request');
        if(this.realSubject == null) {
            this.realSubject = new RealSubject();
        }
        this.realSubject.request();     
    }
}