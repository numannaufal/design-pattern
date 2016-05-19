import {SingletonRegistry} from "./SingletonRegistry";

export class SingletonA {
    private static instance: SingletonA = null;

    constructor(singletonRegistry: SingletonRegistry) {
        if (SingletonA.instance === null) {
            console.log('there isnt instance yet, creating...');
            singletonRegistry.register('singletonA', this);
        } else {
            throw('cant instantiate new object');
        }
        return SingletonA.instance;
    }

    public static getIntance(): SingletonA {
        return SingletonA.instance;
    }
}