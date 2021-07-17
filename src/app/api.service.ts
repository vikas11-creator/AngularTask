import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpHandler, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { END_POINTS } from './end';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserList() {
    const url = `${environment.config.BASE_PATH}/${END_POINTS.USER_LIST}`;
    return this.http.get(url)
      .pipe(
        map((data: any) => {
          console.log('response', data);
          return data;
        }),
        catchError((error: any) => {
          console.log('getPincodeList catchError', error);
          return throwError(error.error);
        })
      );
  }


  getUserProfile() {
    const url = `https://dog.ceo/api/breeds/image/random`;
    return this.http.get(url)
      .pipe(
        map((data: any) => {
          //console.log('response', data);
          return data;
        }),
        catchError((error: any) => {
          console.log('getPincodeList catchError', error);
          return throwError(error.error);
        })
      );
  }


  getUserPost(id) {
    const url = `${environment.config.BASE_PATH}/${END_POINTS.USER_POST}`.replace('#', id);

    return this.http.get(url)
      .pipe(
        map((data: any) => {
          console.log('response', data);
          return data;
        }),
        catchError((error: any) => {
          console.log('getPincodeList catchError', error);
          return throwError(error.error);
        })
      );
  }


  getUserComments(id) {
    const url = `${environment.config.BASE_PATH}/${END_POINTS.USER_COMMENT}`.replace('#', id);
    return this.http.get(url)
      .pipe(
        map((data: any) => {
          console.log( data);
          return data;
        }),
        catchError((error: any) => {
          console.log('getPincodeList catchError', error);
          return throwError(error.error);
        })
      );
  }



}
