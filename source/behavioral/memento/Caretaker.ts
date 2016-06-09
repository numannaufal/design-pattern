import {Originator} from "./Originator";
import {Memento} from "./Memento";

export class Caretaker {
    private mementos: Memento[];
    private originator: Originator;
    private pointer: number = -1;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public saveState() {
        let memento:Memento = this.originator.createMemento();
        this.mementos.push(memento);
        this.pointer++;
    }
    
    public undo() {
        this.pointer--;
        let memento: Memento = this.mementos[this.pointer];
        this.originator.setMemento(memento);
    }

    public redo() {
        this.pointer++;
        let memento: Memento = this.mementos[this.pointer];
        this.originator.setMemento(memento);
    }
}