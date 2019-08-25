//tsc State.ts && node State.js

interface IVehicleOrderState{

    buyVehicle(isSold?: boolean): void;
    payDeposit(payment?: number): void;
    buildVehicle(): void;
    shipVehicle(): void;
}

class OrderStatus{

    currentState: IVehicleOrderState = new SoldState(this)
    
    constructor(){}

    buyVehicle(isSold? : boolean){
        this.currentState.buyVehicle(isSold)
    }

    payDeposit(deposit?: number){
        this.currentState.payDeposit(deposit)
    }

    buildVehicle(){
        this.currentState.buildVehicle()
    }

}

class SoldState implements IVehicleOrderState{

    isSold: boolean = false;
    deposit: number;

    constructor( private _orderStatus: OrderStatus, ){}

    buyVehicle(isSold?: boolean) {
        if(isSold == true){
            this.isSold = isSold
            console.log('The car has been sold')
            this._orderStatus.currentState = new BalanceState(this._orderStatus, this.isSold)          
        } else{
            console.log('The car has not been sold')
        }
    }    

    payDeposit(): void {
        throw new Error("Method not implemented.");
           
    }

    buildVehicle(): void {
        throw new Error("Method not implemented.");
        
    }
    shipVehicle(): void {
        throw new Error("Method not implemented.");
    }


}

class BalanceState implements IVehicleOrderState{

    deposit: number = 0;
    soldStatus: boolean;

    constructor( private _orderStatus: OrderStatus, soldStatus){
        this.soldStatus = soldStatus
    }

    buyVehicle(){
        console.log('I think you may have already purchased a vehicle.')
    }    

    payDeposit(deposit) {
        if(deposit > 0){
            this.deposit = deposit
            console.log(`A $${this.deposit} deposit has been made`)
            this._orderStatus.currentState = new BuildState(this._orderStatus, this.deposit)  
        } else{
            console.log('No deposit has been made')
        }
    }
    buildVehicle(){
        console.log("You have not made a deposit. Make a deposit to start building.")
        
    }
    shipVehicle(): void {
        throw new Error("Method not implemented.");
    }
}

class BuildState implements IVehicleOrderState{

    deposit: number 

    constructor( private _orderStatus: OrderStatus, deposit){
        this.deposit = deposit
    }

    buyVehicle(): void {
        throw new Error("Method not implemented.");
    }    

    payDeposit(): void {
        throw new Error("Method not implemented.");
    }
    buildVehicle(){
        console.log('Building your vehicle')
        
    }
    shipVehicle(): void {
        throw new Error("Method not implemented.");
    }
}

class ShipState implements IVehicleOrderState{

    constructor( private _orderStatus: OrderStatus){}

    buyVehicle(): void {
        throw new Error("Method not implemented.");
    }    

    payDeposit(): void {
        throw new Error("Method not implemented.");
    }
    buildVehicle(): void {
        throw new Error("Method not implemented.");
    }
    shipVehicle(): void {
        throw new Error("Method not implemented.");
    }

}

const carPurhcase = new OrderStatus()
carPurhcase.buyVehicle()
carPurhcase.buyVehicle(true)
carPurhcase.payDeposit()
carPurhcase.buildVehicle()
carPurhcase.payDeposit(200)
carPurhcase.buildVehicle()
