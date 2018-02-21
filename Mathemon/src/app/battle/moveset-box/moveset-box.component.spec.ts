import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesetBoxComponent } from './moveset-box.component';

describe('MovesetBoxComponent', () => {
  let component: MovesetBoxComponent;
  let fixture: ComponentFixture<MovesetBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovesetBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesetBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
