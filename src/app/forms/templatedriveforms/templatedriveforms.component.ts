import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriveforms',
  templateUrl: './templatedriveforms.component.html',
  styleUrls: ['./templatedriveforms.component.css']
})
export class TemplatedriveformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(data) {
    alert('Entered Email id: ' + data.emailid);

  }

}
