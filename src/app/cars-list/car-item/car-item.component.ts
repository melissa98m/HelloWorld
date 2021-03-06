import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
 

 @Input() car!:Car;

 isBooked:boolean = false;
  
  bookingMessage: string = "Réserver maintenant !";
  
 colortext:string = "green";
 disable :any = false;
 alert :any = "";
 onclickButton(){  
  if(this.disable == false){
    this.disable = true
  }
  this.alert = "Vous avez reserver la voiture! ";
  return this.disable
  }
  onBooking(){
    this.isBooked= true;
    this.bookingMessage= "Bonne route ! [réservée]";
    
  }


  constructor() { }

  ngOnInit(): void {
  }

  
  
  
}


