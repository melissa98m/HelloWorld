import { Component, OnInit } from '@angular/core';
import { BananeService } from '../services/banane_services';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title:string = 'Drive X';
  fruit:any = this.banana.getFruit();

  prixResto:number = this.resto.getPrice();
  restoName:string = this.resto.name;
  
  constructor(private banana:BananeService , private resto:RestaurantService) { 
   banana.getFruit()
  }

  ngOnInit(): void {
   console.log(this.banana.getFruit())
    console.log(this.resto.name)
  }

}
