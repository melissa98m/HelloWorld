import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   onclickButton(inputValue: string){  //exemple event binding 
     console.log(inputValue);
   }
   onSurvol(){
     alert("survol de la zone")
   }
}
