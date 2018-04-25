import { TestBed, inject } from '@angular/core/testing';

import { SeeLogsService } from './see-logs.service';

describe('SeeLogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeeLogsService]
    });
  });

  it('should be created', inject([SeeLogsService], (service: SeeLogsService) => {
    expect(service).toBeTruthy();
  }));
});
