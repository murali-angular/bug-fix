import { Data } from './../../entities/data';
import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  const INIT_DATA = [];

  public message = new Subject<string>();

  // public dataSource = new BehaviorSubject<INIT_DATA>(new Data());
   public dataSource = new BehaviorSubject(INIT_DATA);
  data = this.dataSource.asObservable();

  setMessage(value: string) {
    this.message.next(value);
   // it is publishing this value to all the subscribers that have already subscribed to this message
  }

  // this id for
  updatedDataSelection(data: Data) {
    this.dataSource.next(data);
  }
  constructor() { }
}
