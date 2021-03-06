import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError , retry} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {Globals} from '../globals'



@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  
  constructor(private http:HttpClient,public globals:Globals) { }

  getCategories(empresa_id)
  {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'action': 'get_categories',
        'empresaId': JSON.stringify(empresa_id)
        

      })
    };

    const body = '';

    return this.http.post(this.globals.apiUrl, body, httpOptions).pipe(
      retry(3),
      map((res) => {

        return res;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
