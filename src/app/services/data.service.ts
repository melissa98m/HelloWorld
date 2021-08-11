import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  drivers: any = [
    {
      fullName: "ken block",
      pays: "usa",
      coverImage: "./assets/img/drivers/kenblock.jpg",
      category: "gymkhana",
      likeIts: -1
    },
    {
      fullName: "danica patrick",
      pays: "usa",
      coverImage: "./assets/img/drivers/danicapatrick.jpg",
      category: "nascar",
      likeIts: 0
    },
    {
      fullName: "sebastien loeb",
      pays: "france",
      coverImage: "./assets/img/drivers/Loeb.jpg",
      category: "rallye",
      likeIts: 1
    },
    {
      fullName: "molly taylor",
      pays: "australie",
      coverImage: "./assets/img/drivers/mollytaylor.jpg",
      category: "rallye",
      likeIts: -1
    },
    {
      fullName: "collin mcrae",
      pays: "écosse",
      coverImage: "./assets/img/drivers/colin.jpg",
      category: "rallye",
      likeIts: 0
    },
    {
      fullName: "shirley muldowney",
      pays: null,
      coverImage: "./assets/img/drivers/shirleymuldowney.jpg",
      category: "drag",
      likeIts: 0
    },
    {
      fullName: "michael schumacher",
      pays: "allemagne",
      coverImage: "./assets/img/drivers/schumacher.jpg",
      category: "formule 1",
      likeIts: 0
    },
    {
      fullName: "erica enders",
      pays: "usa",
      coverImage: "./assets/img/drivers/ericaenders.jpg",
      category: "drag",
      likeIts: 0
    },
    
  ];
  cars: any = [
    {
      name: "pagani huayra",
      pays: "italie",
      coverImage:"./assets/img/cars/pagani.jpg",
      power: 765,
      //perf: 3.2
    },
    {
      name: "koenigsegg agera rs",
      pays: "suède",
      coverImage:"./assets/img/cars/koenigsegg.jpg",
      power: 1383,
      perf: 2.6

    },
    {
      name: "zenvo tsr s",
      pays: "danemark",
      coverImage:"./assets/img/cars/zenvo.jpg",
      power: 1200,
      perf: 2.8
    },
    {
      name: "bugatti chiron",
      pays: "france",
      coverImage:"./assets/img/cars/bugatti.jpg",
      power: 1500,
      perf: 2.4
    },
    {
      name: "mercedes amg one",
      pays: "allemagne",
      coverImage:"./assets/img/cars/mercedes.jpg",
      power: 1000,
      perf: 2.2
    },
    {
      name: "ferrari sf90",
      pays: "italie",
      coverImage:"./assets/img/cars/ferrari.jpg",
      power: 1000,
      perf: 2.5
    }
  ];


  constructor() { }

   ngOnInit():void {

  }
  getAllCars() { 
    return this.cars;
    }
  getAllDrivers() { 
    return this.drivers;
    }

  getBestDrivers(nb:number):any { 
    var allDrivers = this.drivers.slice();
    allDrivers.sort( (driverB:any , driverA:any) => {
      driverA.likeIts -  driverB.likeIts;
    })
    return allDrivers.slice(0 , nb);
     }
   

        
  
  getBestCars(nbCh:number):any {

   var allCars = this.cars.slice() ;
    
   allCars.sort( (carB:any, carA:any) => {
      return carA.power - carB.power
    })
    
        
      return allCars.slice(0 , nbCh);
    }

}
