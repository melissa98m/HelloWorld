import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drivers } from 'src/app/models/Drivers';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder , FormGroup , NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

  driverForm!: FormGroup  ;
  constructor(private router: Router, private data: DataService , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.driverForm = this.formBuilder.group({ 
      fullName: [''],
      pays:[''],
      coverImage:[''],
      category:['']
    })
  }
  onSubmit(){
     
  const formValue = this.driverForm.value;
  const driver = new Drivers(
    formValue['fullname'],
    formValue['pays'],
    formValue['coverImage'],
    formValue['category'],
  
    );

  console.log(driver)
  
 
  
  }
}
