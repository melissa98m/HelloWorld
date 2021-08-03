import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
   
   enfantUn:any = { name : "Mercedes AMG" , price : 45000 } ;
   enfantDeux:any = { name : "Range Rover evoque", price : 50000 };
   enfantTrois:any = { name : "Ferrari F50" , price : 5550000 };

   carUpdate:any;
   
 

     constructor() { }

  ngOnInit(): void {
    this.carUpdate = new Date();
  }

}
