import {Abstraction} from "./Abstraction";
import {RefinedAbstraction} from "./RefinedAbstraction";
import {ConcreteImplementor1} from "./ConcreteImplementor1";
import {ConcreteImplementor2} from "./ConcreteImplementor2";


class Client {
    public static main(): void {
        console.log('run');

        let abstraction1: Abstraction = new RefinedAbstraction(new ConcreteImplementor1);
        abstraction1.operation();

        let abstraction2: Abstraction = new RefinedAbstraction(new ConcreteImplementor2);
        abstraction2.operation();

    }
}

Client.main();