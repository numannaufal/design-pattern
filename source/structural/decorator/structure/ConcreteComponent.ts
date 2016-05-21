import {Component} from "./Component";

export class ConcreteComponent implements Component {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public receiveDecoration(name: string): void {
        this.name = this.name + ' ' + name;
    }

}