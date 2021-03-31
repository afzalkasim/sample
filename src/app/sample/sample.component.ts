import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { User } from '../models/user';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  reactiveForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
   this.reactiveForm = this._fb.group({
     name : ["", [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
     gender: ["", [Validators.required]],
     Dob: ["", [Validators.required]],
     city: ["", [Validators.required]],
     email: ["", [Validators.required]],
     address: ["", [Validators.required]],
     contactnumber: ["", [Validators.required , Validators.pattern(/^\d*$/)]]
    // name: new FormControl("", [Validators.required]),
    // gender: new FormControl("", [Validators.required]),
    // Dob: new FormControl("", [Validators.required]),
    // city: new FormControl("", [Validators.required]),
    // email: new FormControl("", [Validators.required]),
    // address: new FormControl("", [Validators.required]),
    // contactnumber: new FormControl("", [Validators.required])
   })
  }
 
  onSubmit(){
    console.log(this.reactiveForm);
    console.log("value is",this.reactiveForm.value);
    alert("Successfully submitted")
  }
}
