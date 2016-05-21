import {Component} from "./Component";
import {Leaf} from "./Leaf";

export class Composite implements Component {
    private name: string;
    private children: Component[];
    
    constructor(name: string) {
        this.name = name;
    }
    
    operation(): void {
        console.log(`composite: ${this.name}`);
    }
    
    add(leaf: Component): void {
        this.children.push(leaf);
    }
    
    remove(leaf: Component): void {
        let index: number = this.children.indexOf(leaf);
        if(index !== -1) {
            this.children.splice(index, 1);
        }
    }
    
    getChild(i: number): Component {
        return this.children[i];
    }
    
    iterator(): void {
        this.children.forEach((child) => {
           console.log(child); 
        });
    }
}