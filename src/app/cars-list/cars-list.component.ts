import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  mardiMatin:any = "On est mardi Matin!";// exemple d'interpolation type string 
  age:number = 13; // exemple interpolation number
  
  //2eme exemples objet ou propriété
  game: any = {
    title: "BF 2042",
    support: "Xbox Serie X",
    multi: 128
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  getStock(){   //3eme exemple methode interpolatiion
    return 2050 ;
  }
}
