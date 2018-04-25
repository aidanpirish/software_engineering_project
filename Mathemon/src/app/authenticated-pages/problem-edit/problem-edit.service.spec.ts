import { TestBed, inject } from '@angular/core/testing';

import { ProblemEditService } from './problem-edit.service';

describe('ProblemEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemEditService]
    });
  });

  it('should be created', inject([ProblemEditService], (service: ProblemEditService) => {
    expect(service).toBeTruthy();
  }));
});
