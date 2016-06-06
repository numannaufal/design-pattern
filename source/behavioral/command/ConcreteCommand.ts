import {Command} from "./Command";
import {Receiver} from "./Receiver";

export class ConcreteCommand implements Command {
    private receiver: Receiver;
    private appState: string;
        
    constructor(receiver: Receiver) {
        this.receiver = receiver;
    }
        
    public execute(): void {
        console.log('execute command');
        this.receiver.action();
    }
}