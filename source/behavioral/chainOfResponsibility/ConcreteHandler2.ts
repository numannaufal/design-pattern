import {Handler} from "./Handler";

export class ConcreteHandler2 implements Handler {
    successor: Handler;
    
    constructor() {}
    
    handleRequest(request: string):void {
        switch(request) {
            case "myJob":
                console.log('i can handle request'); 
                break;
            case "notMyJob":
                this.getSuccessor().handleRequest(request);
                break;
            default:
                break;
        }       
    }
    
    setSuccessor(successor: Handler): void {
        this.successor = successor;
    }
    
    getSuccessor(): Handler {
        return this.successor;
    }
}