import { TestBed } from '@angular/core/testing';

import { ConexaoApiService } from './conexao-api.service';

describe('ConexaoApiService', () => {
  let service: ConexaoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexaoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
