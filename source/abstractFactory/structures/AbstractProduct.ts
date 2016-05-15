export abstract class AbstractProduct {
    private name;
    
    constructor(name: String) {
        this.name = name;
        console.log('this is abstract product named '+name);
    }
}