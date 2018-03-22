import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleGroundComponent } from './battle-ground.component';

describe('BattleGroundComponent', () => {
  let component: BattleGroundComponent;
  let fixture: ComponentFixture<BattleGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
