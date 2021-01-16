import { MyserviceService } from './../../services/myservice.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  title = 'Angular 7 project';
  public persondata = [];

  // for service
  componentproperty;
  todaydate;

  // for url service data;


  date  = new Date();
  jsonval = {name: 'Rox', age: '25', address: {a1: 'Mumbai', a2: 'Karnataka'}};

  // declared array of months.

  months = ['January', 'Feburary', 'March', 'April', 'May',
            'June', 'July', 'August', 'September',
            'October', 'November', 'December'];
     isavailable = true; // varible is set to true;

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    // this.todaydate = this.myservice.showTodayDate();
    // console.log(this.myservice.serviceproperty);
  //   this.myservice.serviceproperty = 'component created'; // value changed...
  //   this.componentproperty = this.myservice.serviceproperty;

  // when we used url
  this.myservice.getData().subscribe((data) => {
     this.persondata = Array.from(Object.keys(data), k => data[k]);
     console.log(this.persondata);
  });


  }

  myClickFunction($event) {
    // just added console.log which will display the event details in browser on click of the button.
    alert('Button is clicked');
    console.log($event);
  }

  changemonths($event) {
    console.log('Changed month from the Dropdown');
    console.log($event);
 }

}
