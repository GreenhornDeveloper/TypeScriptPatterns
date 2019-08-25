//tsc Prototype.ts && node Prototype.js

class Car{

    make: string
    model: string

    constructor(make:string, model: string){
        this.make=make;
        this.model=model
    }
    drive(){
        console.log(`Hey! The ${this.make} ${this.model} is driving`)
    }
    stop(){
        console.log(`Hey! The ${this.make} ${this.model} is stopping`)
    }
}

const civic = new Car('Honda','Civic')
console.log(civic.drive())


// Traditional JavaScript

// const carFunctions = {
//     drive(){
//         console.log(`Hey! The ${this.make} ${this.model} is driving`)
//     },
//     stop(){
//         console.log(`Hey! The ${this.make} ${this.model} is stopping`)
//     }
// }
  
// function Car (make, model) {
//     let car = Object.create(carFunctions);
//     car.make = name;
//     car.model = model;

//     return car
// }

// const honda = Car('Honda','Civic')
// console.log(honda.drive())


function CarPrototype(make, model){
    this.make = make;
    this.model = model;
}

CarPrototype.prototype.drive = function() {
    console.log(`Heyt! The ${this.make} ${this.model} is driving`)
}

CarPrototype.prototype.stop = function(){
    console.log(`Hey! The ${this.make} ${this.model} is stopping`)
}

const toyota = new CarPrototype('Toyota', 'Corolla')
console.log(toyota.drive())