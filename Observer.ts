//tsc Observer.ts && node Observer.js

interface CruiseControlSubject{

    registerSpeed( object: SpeedObserver)
    removeSpeed( object: SpeedObserver)
    tellSpedometer()

}

interface SpeedObserver{

    checkSpeed(speed: number)

}

class Automobile implements CruiseControlSubject{

    private currentSpeed: number;
    private speedObservers : SpeedObserver[] = []

   setCruiseSpeed(speed: number){
       console.log(`Setting the speed to ${speed} miles per hour`)
       this.currentSpeed = speed
       this.tellSpedometer()
   }
        
    
   registerSpeed(speedObsv: SpeedObserver){
     this.speedObservers.push(speedObsv)   
    }

    removeSpeed(speedObsv: SpeedObserver){
        let index = this.speedObservers.indexOf(speedObsv)
        this.speedObservers.splice(index, 1);
    }

    tellSpedometer(){
        for(let  observer of this.speedObservers){
            observer.checkSpeed(this.currentSpeed)
        }
    }
}

class InstrumentCluster implements SpeedObserver{

    private subject: CruiseControlSubject

    // Register Instrument cluster to watch the Automobile. In other words,
    // register it as an observer to be notified of speed change of the 
    // cruise control subject

    constructor(automobile: CruiseControlSubject){
        this.subject = automobile
        automobile.registerSpeed(this) 
        //register instrument cluster to listen for changes in speed
    }

    checkSpeed(speed: number){
        console.log(`Updating the speedometer. Setting it to ${speed} miles per hour`)
    }

}

class PoliceRadar implements SpeedObserver{

    speedLimit: number = 55

    private subject: CruiseControlSubject

    constructor(automobile: CruiseControlSubject){
        this.subject = automobile
        automobile.registerSpeed(this) 
    }

    checkSpeed(speed: number){
        if (speed > (this.speedLimit+5)){
            console.log('Bad boy bad boy, whatcha gonna do? Whatcha gona do when they come for you')
        }else{
            console.log('Patience...No tickets yet')
        }
    }
}

let fastCar = new Automobile()
// Pass in the fast car subject
let speedometer = new InstrumentCluster(fastCar)
let cop = new PoliceRadar(fastCar)

fastCar.setCruiseSpeed(40)

fastCar.setCruiseSpeed(65)

