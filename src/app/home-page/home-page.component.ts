import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  
  
  
  title:string = 'Drive X';
  bestdrivers:any ;
  bestcars:any ;
  
 
  
  constructor( private data:DataService) { 
   
   this.bestdrivers = this.data.getBestDrivers(3)
   this.bestcars = this.data.getBestCars(2)
   
  }
  ngOnInit(): void {

  }


}
