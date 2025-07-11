import { TestBed } from '@angular/core/testing';

import { VinDashboard } from './vin-dashboard';

describe('VinDashboard', () => {
  let service: VinDashboard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinDashboard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
