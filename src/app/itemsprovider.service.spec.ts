import { TestBed } from '@angular/core/testing';

import { ItemsproviderService } from './itemsprovider.service';

describe('ItemsproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsproviderService = TestBed.get(ItemsproviderService);
    expect(service).toBeTruthy();
  });
});
