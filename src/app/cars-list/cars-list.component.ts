import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
   
   carOne:any = { name : "pagani" , 
                    pays : "italie", 
                    perf: 3.2  , 
                    power: 765} ;
   carTwo:any = { name : "koenigsegg rs" , 
                      pays : "suede", 
                      perf: 2.6  , 
                      power: 1383 } ;
   carThree:any = { name : "zenvo tsr s" , 
                      pays : "danemark", 
                      perf: 2.8  , 
                      power: 1200 };

   carUpdate:any;
   
 

     constructor() { }

  ngOnInit(): void {
    this.carUpdate = new Date();
  }

}
