import {Implementor} from "./Implementor";

export class ConcreteImplementor1 implements Implementor {
    public operationImp(): void {
        console.log('implemntation 1');
    }
}