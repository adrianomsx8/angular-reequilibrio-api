import { TestBed } from '@angular/core/testing';

import { TerapeutasService } from './terapeutas.service';

describe('TerapeutasService', () => {
  let service: TerapeutasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerapeutasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
