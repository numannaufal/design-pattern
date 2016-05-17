import {Singleton} from "./Singleton";
import {SingletonMap} from "./SingletonMap";

export class SingletonRegistry {
    private static instance: SingletonRegistry = null;
    private map: SingletonMap<{}>;

    constructor() {
        if (SingletonRegistry.instance === null) {
            console.log('there isnt instance yet, creating...');
            SingletonRegistry.instance = this;
            this.map = new SingletonMap();
        } else {
            throw('cant instantiate new object');
        }
        return SingletonRegistry.instance;
    }

    public static getIntance(): SingletonRegistry {
        return SingletonRegistry.instance;
    }
    
    public register<T>(name: string, singleton:T): void {
        this.map.add(name, singleton);
    }
    
    public lookUp(name: string): boolean  {
        if(this.map.has(name)) {
            return true;
        } else {
            return false;
        }
    }
}

let singletonRegistry: SingletonRegistry = new SingletonRegistry();

let singleton: Singleton = new Singleton('eg_property');
singletonRegistry.register('singleton1', singleton);