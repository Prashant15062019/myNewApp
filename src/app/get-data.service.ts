import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  baseUri:string = 'https://jsonplaceholder.typicode.com/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get(`${this.baseUri}users`);
  }

  getPhoto() {
    return this.http.get(`${this.baseUri}photos`);
  }



   // Error handling 
   errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
