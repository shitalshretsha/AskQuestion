import { TestBed } from '@angular/core/testing';

import { AskQstServiceService } from './ask-qst-service.service';

describe('AskQstServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AskQstServiceService = TestBed.get(AskQstServiceService);
    expect(service).toBeTruthy();
  });
});
