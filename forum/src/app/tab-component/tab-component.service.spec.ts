import { TestBed, inject } from '@angular/core/testing';

import { TabComponentService } from './tab-component.service';

describe('TabComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabComponentService]
    });
  });

  it('should be created', inject([TabComponentService], (service: TabComponentService) => {
    expect(service).toBeTruthy();
  }));
});
