import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  
  
  constructor(private router: Router, private data: DataService) { }

  ngOnInit(): void {
  }
 onSubmit(myForm: NgForm ) {
   const name = myForm.value['name'];
   const pays = myForm.value['pays'];
   const coverImage = myForm.value['coverImage'];
   const perf = myForm.value['perf'];
   const power = myForm.value['power'];
   console.log(name , pays , coverImage ,perf , power);
   this.data.addCar(name , pays , coverImage ,perf , power)
   

   this.router.navigate(['/cars']);
   

 }
}
