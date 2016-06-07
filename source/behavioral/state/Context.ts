import {State} from "./State";

export class Context {
    private state: State;
    
    constructor(state) {
        this.state = state;
    }
    
    changeState(state) {
        this.state = state;
    }
    
    request() {
        this.state.handle();
    }
}