import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  gimmeJokes() {
    var i=this.http.get('https://jsonplaceholder.typicode.com/albums');
    console.log(this.http.get('https://jsonplaceholder.typicode.com/albums'));
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }
}