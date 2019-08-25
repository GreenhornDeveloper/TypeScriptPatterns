//tsc Adapter.ts && node Adapter.js

interface FourByFour{

    driveOnDrirt():void

}

interface FrontWheelDrive{

    driveOnPavement():void
}


class ToyotaMiniVan implements FrontWheelDrive{

    driveOnPavement(){
        console.log("I am driving on the road")
    }

}


class ToyotaTacoma implements FourByFour{

    driveOnDrirt(){
        console.log("I am driving on the dirt")
    }

}


class PowerTrainAdapter implements FourByFour{

    private _fwdVehicle:FrontWheelDrive;

    constructor(vehicle:FrontWheelDrive){
        this._fwdVehicle = vehicle
    }

    driveOnDrirt(){
        console.log("This vehicle is converting to front wheel drive.")
        this._fwdVehicle.driveOnPavement()
    }
}


let minivan = new ToyotaMiniVan()
let powerTrainAdapter = new PowerTrainAdapter(minivan);

powerTrainAdapter.driveOnDrirt()
