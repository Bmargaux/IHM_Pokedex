import { TestBed } from '@angular/core/testing';

import { ServiceAccesApiService } from './service-acces-api.service';

describe('ServiceAccesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAccesApiService = TestBed.get(ServiceAccesApiService);
    expect(service).toBeTruthy();
  });
});
