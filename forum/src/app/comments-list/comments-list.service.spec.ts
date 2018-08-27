import { TestBed, inject } from '@angular/core/testing';

import { CommentsListService } from './comments-list.service';

describe('CommentsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsListService]
    });
  });

  it('should be created', inject([CommentsListService], (service: CommentsListService) => {
    expect(service).toBeTruthy();
  }));
});
