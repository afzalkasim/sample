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
   this.reactiveForm = new FormGroup({
    //  name : [null, [Validators.required, Validators.minLength(2)]],
    //  gender: [null, [Validators.required]],
    //  Dob: [null, [Validators.required]],
    //  city: [null, [Validators.required]],
    //  email: [null, [Validators.required]],
    //  address: [null, [Validators.required]],
    //  contactnumber: [null, [Validators.required]]
    name: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    Dob: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    contactnumber: new FormControl("", [Validators.required])
   })
  }
 get name(){
   return this.reactiveForm.get("name")
  }
  onSubmit(){
    console.log(this.reactiveForm);
    // console.log("value is",this.reactiveForm.value);
  }
}
