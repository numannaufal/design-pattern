export class Product {
    private process: string;
    
    constructor() {
        this.process = '';
    }
    
    public addProcess(name: string): void {
        this.process += name;
    }
}