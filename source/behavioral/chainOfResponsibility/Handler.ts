export interface Handler {
    // optional
    successor: Handler;
    
    handleRequest(request: string):void;
    
    // optional
    setSuccessor(successor: Handler): void;
    
    // optional
    getSuccessor(): Handler;
    
}