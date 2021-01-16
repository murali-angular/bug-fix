import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedriveformsComponent } from './reactivedriveforms.component';

describe('ReactivedriveformsComponent', () => {
  let component: ReactivedriveformsComponent;
  let fixture: ComponentFixture<ReactivedriveformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivedriveformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivedriveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
