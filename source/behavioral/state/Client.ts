import {State} from "./State";
import {ConcreteStateA} from "./ConcreteStateA";
import {ConcreteStateB} from "./ConcreteStateB";
import {Context} from "./Context";

class Client {
    public static main(): void {
        let stateA: State = new ConcreteStateA();
        let stateB: State = new ConcreteStateB();
        
        let context: Context = new Context(stateA);
        context.request();
        context.changeState(stateB);
        context.request();
        
    }
}

Client.main();