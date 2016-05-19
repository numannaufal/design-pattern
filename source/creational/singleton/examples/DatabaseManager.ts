export class DatabaseManager {
    private static instance: DatabaseManager = null;
    private server: String = 'localhost';
    private username: String;
    private password: String;
    private connectionCount: number;

    constructor(username: String, password: String) {
        if (DatabaseManager.instance === null) {
            console.log('there isnt instance yet, creating...');
            DatabaseManager.instance = this;
            this.username = username;
            this.password = password;
            this.connect();
            this.connectionCount++;
        } else {
            throw('cant instantiate new object');
        }
        return DatabaseManager.instance;
    }

    public static getIntance(): DatabaseManager {
        return DatabaseManager.instance;
    }
    
    public connect(): void {
        // some impl connect to database w username & password
    }
}

let databaseManager: DatabaseManager = new DatabaseManager('numan', '****');

/* 
    will abort, stop of multiple connection that considered harmful
    also force to use same object, then keep track the database
    if new object instatiated, data will reset
*/

databaseManager = new DatabaseManager('numnum', '****');
