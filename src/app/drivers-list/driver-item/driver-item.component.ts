import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {


 
  
 @Input() drivers:any;
  
  constructor() { }

  ngOnInit(): void {
  }
 
  addLikes(): void {
    this.drivers.likeIts += 1 ;

  }
  remoteLikes(): void {
    this.drivers.likeIts-= 1;
  }

  
  

 
}
