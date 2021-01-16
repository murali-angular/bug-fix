import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactivedriveforms',
  templateUrl: './reactivedriveforms.component.html',
  styleUrls: ['./reactivedriveforms.component.css']
})
export class ReactivedriveformsComponent implements OnInit {

 title = 'Angular 7 Project!';
 emailid;
 formdata;

  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
       emailid: new FormControl('', Validators.compose([
         Validators.required,
         Validators.pattern('[^ @]*@[^ @]*')
       ])),
    password: new FormControl('', this.passwordvalidation)
    });
  }
 passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return {password : true};

    }
  }
  
  onClickSubmit( data ) {this.emailid = data.emailid; }


}
