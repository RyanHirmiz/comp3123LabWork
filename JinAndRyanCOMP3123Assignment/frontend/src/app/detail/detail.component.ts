//Team Member #1: Jin Kwan Kim
//Student ID: 101058670

//Team Member #2: Ryan Hirmiz
//Student ID: 101086605

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie';
import {Location} from '@angular/common';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
  
})
export class DetailComponent implements OnInit 
{
//@Input() movie: Movie;
  
movie:Movie;
  constructor(private route: ActivatedRoute, 
    private movieService: MoviesService, private location: Location) 
  {
    
  }

  ngOnInit() 
  {
  this.getMovie();
  }
  
  getMovie(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }
  
  goBack(): void
  {
  this.location.back();
  }
  
  
/*
  add(): void
  {
  this.movieService.addMovie(this.movie).subscribe(()=> this.goBack)
  } 
*/
/*
  save(): void
  {
  this.movieService.updateMovie(this.movie).subscribe(()=> this.goBack)
  }
  */ 
/*
  delete(): void
  {
  this.movieService.deleteMovie(this.movie).subscribe(()=> this.goBack)
  }
  */ 
} 
  


