/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateDataService } from './create-data.service';

describe('CreateDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateDataService]
    });
  });

  it('should ...', inject([CreateDataService], (service: CreateDataService) => {
    expect(service).toBeTruthy();
  }));
});
