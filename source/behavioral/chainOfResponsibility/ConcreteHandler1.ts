import {Handler} from "./Handler";

export class ConcreteHandler1 implements Handler {
    successor: Handler;
    
    constructor() {}
    
    handleRequest(request: string):void {
        console.log('handle request');        
    }
    
    setSuccessor(): void {
        return;
    }
    
    getSuccessor(): Handler {
        return this.successor;
    }
}