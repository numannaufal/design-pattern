import {Handler} from "./Handler";
import {ConcreteHandler1} from "./ConcreteHandler1";
import {ConcreteHandler2} from "./ConcreteHandler2";

class Client {
    public static main(): void {
        let concreteHandler1: Handler = new ConcreteHandler1();
        let concreteHandler2: Handler = new ConcreteHandler2();
        concreteHandler2.setSuccessor(concreteHandler1);
        
        concreteHandler2.handleRequest("myJob");
        concreteHandler2.handleRequest("notMyJob");
    }
}

Client.main();