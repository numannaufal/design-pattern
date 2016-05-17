export class Singleton {
    private static instance: Singleton = null;
    private exampleProperty: String;

    constructor(exampleProperty: String) {
        if (Singleton.instance === null) {
            console.log('there isnt instance yet, creating...');
            Singleton.instance = this;
            this.exampleProperty = exampleProperty;
        } else {
            throw('cant instantiate new object');
        }
        return Singleton.instance;
    }

    public static getIntance(): Singleton {
        return Singleton.instance;
    }
}

/*
    the essense of singleton pattern is:
    PREVENT the instantioan of new object
    
    why perharps probably wrong and harmful?
    1. the data will be changed affected system
    2. the cost of instantating object, eg connection

 */

let singleton: Singleton = new Singleton('numan');
singleton = new Singleton('numnum');
