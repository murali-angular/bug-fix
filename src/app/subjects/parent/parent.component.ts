import { MessageService } from './../services/message.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy {

  message: string;
  subscription: Subscription;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.subscription = this.messageService.message.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 
//   MessageService.data.subscribe(data => {
//     //do what ever needs doing when data changes
//   })

//   ....
//   //update the value of data in the service
// dataService.updateData(newData);

}
