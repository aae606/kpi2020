import { TestBed } from '@angular/core/testing';

import { KpiSheetService } from './kpi-sheet.service';

describe('KpiSheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KpiSheetService = TestBed.get(KpiSheetService);
    expect(service).toBeTruthy();
  });
});
