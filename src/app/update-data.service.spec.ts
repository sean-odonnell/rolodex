/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateDataService } from './update-data.service';

describe('UpdateDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateDataService]
    });
  });

  it('should ...', inject([UpdateDataService], (service: UpdateDataService) => {
    expect(service).toBeTruthy();
  }));
});
