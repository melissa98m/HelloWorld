import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  book:any = {
    title: 'Le cour',
    author: 'moi',
    price: null
  };

  games:string[] =["PES06" , "MineCraft" , "Shenmue", "Evil Dead"];
  
  colorOne:string = "blue";
  
  OnOff:boolean = true;

 MarginPts:string = "50";


 product:any= { 
   label: 'iphone',
   price: 1522,
   stock: 15
 }
  constructor() { }

  ngOnInit(): void {
  }
  isOnline:boolean = true;

 getColor(){
  return "green";
}
onSwitch(){
  if(this.OnOff){
    this.OnOff = false;
  }else{
    this.OnOff= true ;
}
}
}