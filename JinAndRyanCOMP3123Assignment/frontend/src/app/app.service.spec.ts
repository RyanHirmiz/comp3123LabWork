//Team Member #1: Jin Kwan Kim
//Student ID: 101058670

//Team Member #2: Ryan Hirmiz
//Student ID: 101086605

import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });
});
