import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../models/Car';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars:Car[] | undefined;
                      
   carUpdate:any;
   newCar:Car = new Car("tuture" , "Frenchese" , "" , 1500,  19);
 

     constructor(private data: DataService , ) {
    
  }
      
  
  ngOnInit(): void {
    this.carUpdate = new Date();
    this.data.cars.push(this.newCar);
    this.cars = this.data.getAllCars();
  }

}
