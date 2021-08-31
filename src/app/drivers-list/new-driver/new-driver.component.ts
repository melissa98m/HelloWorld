import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drivers } from 'src/app/models/Drivers';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder , FormGroup , NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {
 
  minLong:number = 2;
  categories:any ;
  driverForm!: FormGroup  ;
  constructor(private router: Router, private data: DataService , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.categories = this.data.getAllCategories();
    this.createForm();
    
  }
  createForm(){
    
    this.driverForm = this.formBuilder.group({ 
      fullName: ['' , [Validators.required]],
      pays:['',[Validators.required , Validators.minLength(this.minLong)]],
      coverImage:['', [Validators.required] ],
      category:['',[ Validators.required]]
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
