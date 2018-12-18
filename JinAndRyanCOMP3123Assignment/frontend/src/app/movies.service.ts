//Team Member #1: Jin Kwan Kim
//Student ID: 101058670

//Team Member #2: Ryan Hirmiz
//Student ID: 101086605

import { Injectable } from '@angular/core';
//import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Movie} from './movie';
import { MOVIES } from './mock-movies';
/*
const httpOptions  = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
} 
*/
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
//private movieUrl = "http://localhost:3000/api/movies";
  constructor(/*private http: HttpClient*/) { }

  //get movies
  
getMovies ():Observable<Movie[]>{
  /*
  return this.http.get<Movie[]>(this.movieUrl).pipe(
    tap(_ => this.log('fetched movies')),
    catchError(this.handleError('getMovies', []))
    
    );
    */
   return of (MOVIES);
}
//get movie by id

getMovie(id:number):Observable<Movie>
{
 /* const url = `${this.movieUrl}/${id}`;
  return this.http.get<Movie>(url).pipe(
    tap(_ => this.log(`fetched movie id=${id}`)),
    catchError(this.handleError<Movie>(`getMovie id=${id}`))
  );
*/
return of(MOVIES.find(movie=> movie.id === id)); 
}


//add movie
/*
addMovie (movie: Movie): Observable<Movie>
{
  return this.http.post(this.movieUrl, movie, httpOptions).pipe(
    tap((movie:Movie)=> this.log(`added movie w/ id=${movie.id}`)),
    catchError(this.handleError<Movie>('addMovie'))
  );
}
//delete movie
deleteMovie (movie:Movie | number): Observable<Movie>
{
  const id = typeof movie === 'number' ? movie : movie.id;
  const url = `${this.movieUrl}/${id}`;

  return this.http.delete<Movie>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted movie id=${id}`)),
    catchError(this.handleError<Movie>('deleteMovie'))
  );
}
*/
//update movie
/*
updateMovie (movie: Movie): Observable<any>
{
  return this.http.put(this.movieUrl, movie, httpOptions).pipe(
    tap(_ => this.log(`updated movie id=${movie.id}`)),
    catchError(this.handleError<any>('updateMovie'))
  );
}
*/
/*/
private handleError<T> (operation ='operation',result?:T)
{
  return(error:any):Observable<T> =>
  {
    console.error(error);
    this.log(`${operation} failed ${error.message}`);
  
  return of (result as T);
  };

}
*/
//private log(message:string)
//{

//}

}