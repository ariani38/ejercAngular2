import { TestBed } from '@angular/core/testing';

import { MatriculacionAlService } from './matriculacion-al.service';

describe('MatriculacionAlService', () => {
  let service: MatriculacionAlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatriculacionAlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
