import {Pizza} from "./factory/abstract/Pizza";
import {CheesePizza} from "./factory/concrete/CheesePizza";
import {MeatLover} from "./factory/concrete/MeatLover";

export class PizzaChef {
    private name;
    
    constructor(name: String) {
        this.name = name;
        console.log(name + ' is ready to bake pizza');
    }
    
    bakeCheesePizza() {
        console.log(this.name + ' is making cheese pizza');
        let cheesePizza: CheesePizza = new CheesePizza();
        console.log('cheese pizza ready');
        console.log(cheesePizza);
        return cheesePizza;
    }
    
    bakeMeatLover() {
        console.log(this.name + ' is making meat lover');
        let meatLover: MeatLover = new MeatLover();
        console.log('meat lover ready');
        console.log(meatLover);
        return meatLover;
    }  
}

/*
    Once upon a time, there is a Pizza Restaurant,
    They only have two menus:
    1. Cheese Pizza
    2. Meat Lovers

    Cheese Pizza is consist of:
    - Thin Bread
    - Toppings: cheese
    - BreadRim: cheese

    Meat Lovers:
    - Bread
    - Toppings: meat
    - BreadRim: sosis

*/
console.log('There are orders: ');
console.log('1. Cheese Pizza');
console.log('2. Meat Lovers');
console.log("GO GO GO!");

let pizzaChef: PizzaChef = new PizzaChef('numan');
let cheesePizza: CheesePizza = pizzaChef.bakeCheesePizza();
let meatLover: MeatLover = pizzaChef.bakeMeatLover();
