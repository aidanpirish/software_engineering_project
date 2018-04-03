import { TestBed, inject } from '@angular/core/testing';

import { CurrentBattleStatusService } from './current-battle-status.service';

describe('CurrentBattleStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentBattleStatusService]
    });
  });

  it('should be created', inject([CurrentBattleStatusService], (service: CurrentBattleStatusService) => {
    expect(service).toBeTruthy();
  }));
});
