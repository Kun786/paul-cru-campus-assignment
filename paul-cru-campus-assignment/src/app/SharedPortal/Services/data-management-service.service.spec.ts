import { TestBed } from '@angular/core/testing';

import { DataManagementServiceService } from './data-management-service.service';

describe('DataManagementServiceService', () => {
  let service: DataManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
