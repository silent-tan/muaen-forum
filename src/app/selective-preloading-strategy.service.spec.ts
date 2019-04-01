/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

describe('Service: SelectivePreloadingStrategy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectivePreloadingStrategyService]
    });
  });

  it('should ...', inject([SelectivePreloadingStrategyService], (service: SelectivePreloadingStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
