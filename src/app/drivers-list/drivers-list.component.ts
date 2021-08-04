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
  constructor() { }

  ngOnInit(): void {
  }
  isOnline:boolean = true;
}
