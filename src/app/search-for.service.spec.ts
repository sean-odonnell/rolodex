/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchForService } from './search-for.service';

describe('SearchForService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchForService]
    });
  });

  it('should ...', inject([SearchForService], (service: SearchForService) => {
    expect(service).toBeTruthy();
  }));
});
