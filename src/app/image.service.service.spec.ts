import { TestBed } from '@angular/core/testing';

import { Image.ServiceService } from './image.service.service';

describe('Image.ServiceService', () => {
  let service: Image.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Image.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
