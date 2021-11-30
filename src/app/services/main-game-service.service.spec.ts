import { TestBed } from '@angular/core/testing';

import { MainGameServiceService } from './main-game-service.service';

describe('MainGameServiceService', () => {
  let service: MainGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
