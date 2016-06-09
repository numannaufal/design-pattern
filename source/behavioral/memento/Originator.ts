import {Memento} from "./Memento";

export class Originator {
    private memento: Memento;
    private state: string;

    setMemento(memento: Memento) {
        this.state = memento.getState();
    }

    createMemento() {
        return new Memento(this.state);
    }


}