import { TestBed } from '@angular/core/testing';

import { ProdcutoService } from './prodcuto.service';

describe('ProdcutoService', () => {
  let service: ProdcutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdcutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
