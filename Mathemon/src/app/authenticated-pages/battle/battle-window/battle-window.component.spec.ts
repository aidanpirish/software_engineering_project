import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleWindowComponent } from './battle-window.component';

describe('BattleWindowComponent', () => {
  let component: BattleWindowComponent;
  let fixture: ComponentFixture<BattleWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


