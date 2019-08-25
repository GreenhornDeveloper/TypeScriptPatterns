/* 
    This is the experimental way of doing it within 
    the TypeScript language itself.
    Run with 'tsc --target ES5 --experimentalDecorators' prefix
*/

// function wrapperOne() {
//     console.log("wrapperOne(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("wrapperOne(): called");
//     }
// }

// function wrapperTwo() {
//     console.log("wrapperTwo(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("wrapperTwo(): called");
//     }
// }

// class C {
//     @wrapperOne()
//     @wrapperTwo()(
//     someFunction() {}
// }


/* This is the way to create decorators without TypeScript's built in support */
abstract class Vehicle{
    private _make: string;
    private _model: string;
    private _passengerCount: number;

    constructor(make:string, model: string, passengerCount:number){
        this._make = make;
        this._model = model;
        this._passengerCount = passengerCount
    }

    get make():string{
        return this._make
    }

    set make(newMake: string){
        this._make = newMake;
    }
  
    get model():string{
        return this._model
    }

    set model(newModel: string){
        this._model = newModel;
    }

    get passengerCount():number{
        return this._passengerCount
    }

    set passengerCount(newCount: number){
        this._passengerCount = newCount;
    }

    describeCar(): string{
        return `You are viewing the ${this._make} ${this._model}.`
    }

    countPassengers(): string{
        return `You are can seat ${this._passengerCount} passengers in the ${this._make} ${this._model}.`
    }
}

class Camry extends Vehicle{


    constructor(){
        super('Toyota', 'Camry', 5)
    }



}

class Sienna extends Vehicle{

    constructor(){
        super('Toyota', 'Sienna', 5)
    }

}

abstract class VehicleOptions extends Vehicle{
    decoratedVehicle: Vehicle

    //override the previous methods defined in the Abstract Vehicle class
    abstract describeCar():string;
    abstract countPassengers(): string;
}

class LeatherSeats extends VehicleOptions{

    decoratedVehicle: Vehicle;

    constructor(vehicle:Vehicle){
        super(vehicle.make, vehicle.model, vehicle.passengerCount);
        this.decoratedVehicle = vehicle;
    }
    describeCar(): string {
       return `${this.decoratedVehicle.describeCar()} It now has leather seats.`
    }
    countPassengers(): string {
        return `${this.decoratedVehicle.countPassengers()}`
    }
    
}

class CenterSeat extends VehicleOptions{

    decoratedVehicle: Vehicle;

    constructor(vehicle:Vehicle){
        super(vehicle.make, vehicle.model, vehicle.passengerCount);
        this.decoratedVehicle = vehicle;
    }

    describeCar(): string {

        if(this.decoratedVehicle['decoratedVehicle'] instanceof Sienna){
            return `${this.decoratedVehicle.describeCar()} It now has the center seat on the second row.`
        } else{
            return `${this.decoratedVehicle.describeCar()} This vehicle doesn't have the second row.`
        }
    }

    countPassengers(): string {
        if(this.decoratedVehicle['decoratedVehicle'] instanceof Sienna){
            this.decoratedVehicle['decoratedVehicle'].passengerCount++
        }
        return `${this.decoratedVehicle.countPassengers()}`
    }
}

let mySienna:Sienna = new Sienna()
let myCamry:Camry = new Camry()

//Add leather seats
mySienna = new LeatherSeats(mySienna);
myCamry = new LeatherSeats(myCamry);

//Add the center seat for the minivan's second row
mySienna = new CenterSeat(mySienna);
myCamry = new CenterSeat(myCamry);

console.log(mySienna.describeCar())
console.log(myCamry.describeCar())

console.log(mySienna.countPassengers())
console.log(myCamry.countPassengers())