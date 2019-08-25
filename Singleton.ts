//tsc Singleton.ts && node Singleton.js

class DBInstantiator {
    private static instance: DBInstantiator;

    private _connectionUser: string;
    private _connectionPassword: string;
    private _connectionHost: string;
    private _connectionPort: number;
    private _connectionDatabase: string;
    private _isConnected: boolean;

    private constructor() { }

    static getInstance() : DBInstantiator {
        if (!DBInstantiator.instance) {
            DBInstantiator.instance = new DBInstantiator();
            DBInstantiator.instance._connectionUser = 'dbUser';
            DBInstantiator.instance._connectionPassword = 'dbPass';
            DBInstantiator.instance._connectionHost = 'localhost';
            DBInstantiator.instance._connectionPort = 1234;
            DBInstantiator.instance._connectionDatabase = 'usersDb';
            DBInstantiator.instance._isConnected = true;
        }
        return DBInstantiator.instance;
    }

    createAuthURL():string {
        return this._connectionUser + ":" + this._connectionPassword + "/" + this._connectionHost + ":" + this._connectionPort + "/" + this._connectionDatabase
    };

    connectionStatus(){
        return `this is the connection status: ${this._isConnected}`
    }
    connect():boolean{
        return this._isConnected = true;
    }

    disconnect():boolean{
        return this._isConnected = false;
    }

}

const dbConnection = DBInstantiator.getInstance()
console.log(dbConnection.createAuthURL())
console.log(dbConnection.connectionStatus()) //true
console.log(dbConnection.disconnect()) //sets to false
console.log(dbConnection.connectionStatus()) //returns false

const dbConnection2 = DBInstantiator.getInstance()
console.log(dbConnection2.connectionStatus()) //returns false
console.log(dbConnection2.connect()) //sets to true

console.log(dbConnection.connectionStatus()) //true - shares the same instance of connectionStatus with dbConnection 2

console.log(dbConnection === dbConnection2) //true
