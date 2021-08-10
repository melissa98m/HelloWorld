import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {


 addLikeMessage :string = "";
  
 @Input() drivers:any;
  
  constructor() { }

  ngOnInit(): void {
  }
 
  addLikes(): void {
    this.drivers.likeIts ++ ,
    this.addLikeMessage = "Vous avez ajouté 1 Like";

  }
  remoteLikes(): void {
    this.drivers.likeIts -- ,
    this.addLikeMessage = "Vous avez retiré 1 Like";
  }

  
  

 
}
