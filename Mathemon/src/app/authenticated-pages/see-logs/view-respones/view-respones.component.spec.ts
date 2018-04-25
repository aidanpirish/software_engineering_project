import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResponesComponent } from './view-respones.component';

describe('ViewResponesComponent', () => {
  let component: ViewResponesComponent;
  let fixture: ComponentFixture<ViewResponesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewResponesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
