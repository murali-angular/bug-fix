import { MyserviceService } from './../../services/myservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  todayDate;
  newcomponentproperty;
  newcomponent = 'Entered in new component created';

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.todayDate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;

  }

}
