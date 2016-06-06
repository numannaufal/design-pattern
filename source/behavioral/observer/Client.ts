import {Observer} from "./Observer";
import {ConcreteObserver} from "./ConcreteObserver";
import {Subject} from "./Subject";
import {ConcreteSubject} from "./ConcreteSubject";

class Client {
    public static main(): void {
        let subject: Subject = new ConcreteSubject();
        let observer1: Observer = new ConcreteObserver();
        let observer2: Observer = new ConcreteObserver();
        
        subject.attach(observer1);
        subject.attach(observer2);
        subject.detach(observer2);
        subject.attach(observer2);
        
        subject.setState('new state');
        subject.notify();
        
    }
}

Client.main();