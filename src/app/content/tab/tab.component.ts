import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() tab: object;

  printTitle() {
    console.log(this.tab.title);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
