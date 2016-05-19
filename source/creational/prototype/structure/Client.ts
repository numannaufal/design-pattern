import {ConcretePrototype} from "./ConcretePrototype";
import {AbstractPrototype} from "./AbstractPrototype";
"strict mode";

let concreteProto: ConcretePrototype = new ConcretePrototype();
concreteProto.setName('numan');
console.log(concreteProto);

let clonedObject: any = concreteProto.clone();
console.log(clonedObject);