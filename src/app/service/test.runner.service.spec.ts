import { TestBed, inject } from '@angular/core/testing';

import { Test.RunnerService } from './test.runner.service';

describe('Test.RunnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Test.RunnerService]
    });
  });

  it('should be created', inject([Test.RunnerService], (service: Test.RunnerService) => {
    expect(service).toBeTruthy();
  }));
});
