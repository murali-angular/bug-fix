import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablistComponent } from './tablist/tablist.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [TablistComponent, TabComponent],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
