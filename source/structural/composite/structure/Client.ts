import {Component} from "./Component";
import {Composite} from "./Composite";
import {Leaf} from "./Leaf";

class Client {
    public static main(): void {
        let composite1: Component = new Composite('composite1');
       
        let leaf1: Component = new Leaf('leaf1');
        composite1.add(leaf1);
        
        let leaf2: Component = new Leaf('leaf2');
        composite1.add(leaf2);
        
        composite1.iterator();
        
        composite1.remove(leaf1);
        composite1.remove(leaf2);
        
        let composite2: Component = new Composite('composite2');
        composite1.add(composite2); 
    }
}

Client.main();