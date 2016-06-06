import {Command} from "./Command";
import {ConcreteCommand} from "./ConcreteCommand";
import {Receiver} from "./Receiver";
import {Invoker} from "./Invoker";

class Client {
    public static main(): void {
        let receiver: Receiver = new Receiver();
        let command: Command = new ConcreteCommand(receiver);
        let invoker: Invoker = new Invoker();
        invoker.getCommand(command);
        invoker.execute(); 
    }
}
Client.main();