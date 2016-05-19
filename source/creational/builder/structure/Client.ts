import {Director} from "./Director";
import {AbstractBuilder} from "./AbstractBuilder";
import {ConcreteBuilder} from "./ConcreteBuilder";
import {Product} from "./Product";

let concreteBuilder: AbstractBuilder = new ConcreteBuilder();

Director.createProductAB(concreteBuilder);
console.log(concreteBuilder.getProduct());

Director.createProductBA(concreteBuilder);
console.log(concreteBuilder.getProduct());
