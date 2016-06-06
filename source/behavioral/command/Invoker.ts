import {Command} from "./Command";

export class Invoker {
    private commands: Command[];
    
    constructor() {}
    
    public getCommand(command: Command): void {
        this.commands.push(command);
    }
    
    public execute() {
        this.commands.forEach((command) => {
           command.execute(); 
        });
    }
}