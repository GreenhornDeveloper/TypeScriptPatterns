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






// class Car{
//     make: string;
//     model: string;
//     passengerCount: number;
//     driveTrain: string
// }

// abstract class AutomobileFactory{
//     car: Car;

//     constructor(){}

//    abstract buildCar(type: Car) : void;

// }

// class AutomobileCreator extends AutomobileFactory{
    
//     buildCar(type: Car){
//         if(type.make == 'Toyota'){
//             return new ToyotaFactory().buildCar(type)
//         } else if (type.make == 'Honda'){
//             return new HondaFactory().buildCar(type)
//         } else{
//             return 'Not found'
//         }
        
//     }

// }

// class ToyotaFactory{
    
//     buildCar(type: Car){
//         console.log(`${type.passengerCount} passenger ${type.make} ${type.model} with a ${type.driveTrain} engine was just made!`)
//     }

// }

// class HondaFactory{

//     buildCar(type: Car){
//         console.log(`You just built a ${type.passengerCount} passenger ${type.make} ${type.model} with a ${type.driveTrain} engine.`)
//     }
// }

// const toyotaMinivan = new AutomobileCreator().buildCar({make: 'Toyota', model:'Sienna', passengerCount: 8, driveTrain:'V6'})
// const hondaMinivan = new AutomobileCreator().buildCar({make: 'Honda', model:'Odyssey', passengerCount: 8, driveTrain:'V6'})
