import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  
  @Input() drivers:any;
  @Input() cars:any;
  
  title:string = 'Drive X';
  
  
  
 
  
  constructor( private bestCars:DataService , bestDriver:DataService) { 
   
   bestCars.getBestCars(2)
   bestDriver.getBestDrivers(1)
   
  }
  ngOnInit(): void {

  }


}
