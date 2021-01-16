import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ParentComponent } from './parent.component';



@NgModule({
  declarations: [ViewchildComponent, ViewchildrenComponent, ParentComponent],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
