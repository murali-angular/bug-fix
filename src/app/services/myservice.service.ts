import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private finaldate = [];
  private apiurl = 'http://jsonplaceholder.typicode.com/users';

  serviceproperty = 'Service Created';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiurl);
  }

  showTodayDate() {
    const ndate = new Date();
    return ndate;
  }
}
