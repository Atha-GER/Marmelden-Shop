import { TestBed } from '@angular/core/testing';

import { DatengeberService } from './datengeber.service';

describe('DatengeberService', () => {
  let service: DatengeberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatengeberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
