import { Component, OnInit } from '@angular/core';
// import { User } from '../models/user';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
// register=new User();
// name:any=""
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myForm:any){
    console.log(myForm);
    console.log("value is",myForm.value);
  }
}
