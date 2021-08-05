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
  
  constructor() { }

  ngOnInit(): void {
  }
  isOnline:boolean = true;

 getColor(){
  return "green";
}

}