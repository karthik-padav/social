import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class DataServiceProvider {
  
  headers:any = new HttpHeaders().set('Content-Type', 'application/json')
  BASE_URL:string="http://localhost:7555";
  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
  }

  register(userData) {
    return new Observable((observer) => {
      console.log(userData);
      this.http.post(this.BASE_URL + '/register', userData, {
        headers: this.headers
      }).subscribe((res) => {
        observer.next(res);
        observer.complete();
      }, (err: HttpErrorResponse) => {
        console.log(err.message);
      });
    })
  }

  
  // register() {
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'text/json',
  //     'Accept': 'text/json'
  //   });
  //   let data = {
  //     email:'karthikpadav'
  //   }
  //   return new Observable((observer) => {
  //     this.http.get('https://opentdb.com/api.php?amount=10'
  //     // {
  //     //   headers: headers
  //     // }
  //   ).subscribe((res) => {
  //       observer.next(res);
  //       observer.complete();
  //     }, (err: HttpErrorResponse) => {
  //       console.log(err.message);
  //     });
  //   })
  // }

}