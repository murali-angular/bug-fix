import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedriveformsComponent } from './templatedriveforms.component';

describe('TemplatedriveformsComponent', () => {
  let component: TemplatedriveformsComponent;
  let fixture: ComponentFixture<TemplatedriveformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatedriveformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedriveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
