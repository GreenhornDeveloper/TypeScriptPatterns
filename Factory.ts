//tsc Factory.ts && node Factory.js

class Car{
    model: string;
    passengerCount: number;
    driveTrain: string
}

abstract class AutomobileFactory{
    make: string;

    constructor(make: string){
        this.make = make;
    }

   abstract buildCar(type: Car) : void;

}


class ToyotaFactory extends AutomobileFactory{
    
    buildCar(type: Car){
        console.log(`${type.passengerCount} passenger ${this.make} ${type.model} with a ${type.driveTrain} engine was just made!`)
    }

}

class HondaFactory extends AutomobileFactory{

    buildCar(type: Car){
        console.log(`You just built a ${type.passengerCount} passenger ${this.make} ${type.model} with a ${type.driveTrain} engine.`)
    }
}

const toyotaFactory = new ToyotaFactory('Toyota')
toyotaFactory.buildCar({model:'Sienna', passengerCount: 8, driveTrain:'V6'})

const hondaFactory = new HondaFactory('Honda')
hondaFactory.buildCar({model:'Odyssey', passengerCount: 8, driveTrain:'V6'})
