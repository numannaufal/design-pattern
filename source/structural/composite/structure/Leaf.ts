import {Component} from "./Component";

export class Leaf implements Component {
    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    operation(): void {
        console.log(`leaf name: ${this.name}`);
    }
    
    add(component: Component): void {
        return;
    }
    
    remove(component: Component): void {
        return;
    }
    
    getChild(i: number): Component {
        return null;
    }
    
    iterator():void {
        return;
    }
}