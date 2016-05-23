import {Facade} from "./Facade";

class Client {
    public static main(): void {
        let facade: Facade = new Facade();
        facade.process();
    }
}

Client.main();