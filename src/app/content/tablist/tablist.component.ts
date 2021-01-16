import { TabComponent } from './../tab/tab.component';
import { ContentChildren, QueryList, Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;

  constructor() { }
ngAfterContentInit() {
  this.tabList.toArray() [0] .printTitle();
}

}
