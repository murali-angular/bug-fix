import { ViewchildComponent } from './viewchild/viewchild.component';
import { Component, ViewChild, ViewChildren, AfterViewInit, ElementRef, QueryList, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit, OnInit {

  constructor() { }

  name = 'Angular';
// thi is for content chilren
  tabs = [
{ title: 'First Tab title', content: 'First Tab content' },
{ title: 'Second Tab title', content: 'Second Tab content' },
{ title: 'Third Tab title', content: 'Third Tab content' }
  ];

  @ViewChild(ViewchildComponent , {static: false}) hello: ViewchildComponent;
  @ViewChild('pRef', {static: false}) pRef: ElementRef;

  // for view childern

  @ViewChildren(ViewChildren) hellos: QueryList<any>;

  ngOnInit() {
    this.tabs = [
      { title: 'First Tab title', content: 'First Tab content' },
{ title: 'Second Tab title', content: 'Second Tab content' },
{ title: 'Third Tab title', content: 'Third Tab content' }
    ];

  }

  ngAfterViewInit() {
    //  for view child
    // console.log('Hello', this.hello.name);
    // console.log(this.pRef.nativeElement.innerHTML);
    // this.pRef.nativeElement.innerHTML = 'DOM updated successfully!!!'

    //  for view children
    this.hellos.forEach(hello => console.log(hello));
  }


}
