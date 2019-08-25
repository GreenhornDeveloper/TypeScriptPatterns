//tsc Facade.ts && node Facade.js

class DoorAssembly{

    assembleHinges(){
        console.log("Screw on the door hinges")
    }

    attachDoors(){
        console.log("Attaching the door to the frame")
    }
}

class WheelAssembly{

    makeWheelRim(){
        console.log("Forging the wheel rim")
    }

    mountTire(){
        console.log("Mounting the tire on the wheel")
    }

    installWheel(){
        console.log("Putting the wheel on the hub")
    }

}

class SeatAssembly{

    createSeatFrame(){
        console.log("Creating the seat's frame")
    }

    attachSeatToFloor(){
        console.log("Seat is being attached")
    }
}

class Electronics{

    installNavigationSystem(){
        console.log("Installing the navigation system in the dashboard")
    }

    installDashboard(){
        console.log("Installing the dashboard")
    }
}

class CarAssemblyFacade{

    private _doorAssembly:DoorAssembly;
    private _wheelAssembly:WheelAssembly;
    private _seatAssembly:SeatAssembly;
    private _electronics:Electronics;

    constructor(doorBuild: DoorAssembly, wheelBuild: WheelAssembly, seatBuild: SeatAssembly, electronicBuild:Electronics){
        this._doorAssembly = doorBuild;
        this._wheelAssembly = wheelBuild;
        this._seatAssembly = seatBuild;
        this._electronics = electronicBuild
    }


    buildInternals(){
        this._seatAssembly.createSeatFrame()
        this._seatAssembly.attachSeatToFloor()

        this._electronics.installDashboard()
        this._electronics.installNavigationSystem()
    }

    buildExternals(){
        this._doorAssembly.assembleHinges()
        this._doorAssembly.attachDoors()

        this._wheelAssembly.makeWheelRim()
        this._wheelAssembly.mountTire()
        this._wheelAssembly.installWheel()
    }
}

const doorBuild = new DoorAssembly();
const wheelBuild = new WheelAssembly();
const seatBuild = new SeatAssembly();
const electronics = new Electronics();

const carBulder = new CarAssemblyFacade(doorBuild,wheelBuild,seatBuild,electronics);

carBulder.buildExternals()
carBulder.buildInternals()
