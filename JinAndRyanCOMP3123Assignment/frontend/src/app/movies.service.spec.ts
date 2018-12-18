//Team Member #1: Jin Kwan Kim
//Student ID: 101058670

//Team Member #2: Ryan Hirmiz
//Student ID: 101086605

import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesService = TestBed.get(MoviesService);
    expect(service).toBeTruthy();
  });
});
