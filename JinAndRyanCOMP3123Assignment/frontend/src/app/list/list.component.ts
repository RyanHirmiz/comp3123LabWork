//Team Member #1: Jin Kwan Kim
//Student ID: 101058670

//Team Member #2: Ryan Hirmiz
//Student ID: 101086605

import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Movie} from '../movie';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit 
{
movies: Movie[];


  constructor(private movieService:MoviesService) {} 
  
ngOnInit()
{
  this.getMovies();
}

getMovies():void
{
 this.movieService.getMovies().subscribe(movies => this.movies = movies)

}

/*
add(title: string, runningtime: string, genre: string, rating: string, director:string, status:string)
{
  title = title.trim();
if(!title){return};
this.movieService.addMovie({title} as Movie).subscribe
(movie => {this.movies.push(movie)})

runningtime = runningtime.trim();
if(!title){return};
this.movieService.addMovie({runningtime} as Movie).subscribe
(movie => {this.movies.push(movie)})

genre = genre.trim();
if(!genre){return};
this.movieService.addMovie({genre} as Movie).subscribe
(movie => {this.movies.push(movie)})

rating = rating.trim();
if(!rating){return};
this.movieService.addMovie({rating} as Movie).subscribe
(movie => {this.movies.push(movie)})

director = director.trim();
if(!director){return};
this.movieService.addMovie({director} as Movie).subscribe
(movie => {this.movies.push(movie)})

status = status.trim();
if(!status){return};
this.movieService.addMovie({status} as Movie).subscribe
(movie => {this.movies.push(movie)})

}
*/
/*
delete(movie:Movie): void
{
  this.movies = this.movies.filter(m => m !== movie);
  this.movieService.deleteMovie(movie).subscribe();
}
*/
 

}
