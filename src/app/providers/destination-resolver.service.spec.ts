import { TestBed } from '@angular/core/testing';

import { DestinationResolverService } from './destination-resolver.service';

describe('DestinationResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DestinationResolverService = TestBed.get(DestinationResolverService);
    expect(service).toBeTruthy();
  });
});
