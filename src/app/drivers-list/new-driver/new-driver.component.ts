import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Drivers } from 'src/app/models/Drivers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

  constructor(private router: Router, private data: DataService) { }

  ngOnInit(): void {
  }
  onSubmit(myForm: NgForm ){
     
  const driver = new Drivers(
    myForm.value['fullname'],
    myForm.value['pays'],
    myForm.value['coverImage'],
    myForm.value['category'],
    myForm.value['likeIts']
    );

  this.data.addDriver(driver);
  
 
   this.router.navigate(['drivers']);
  }
}
