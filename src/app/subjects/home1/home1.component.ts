import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor(public messageservice: MessageService) { }

  setMessage(event) {
    console.log(event.value);
    this.messageservice.setMessage(event.value);
  }

  ngOnInit(): void {
  }

}
