import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError , retry} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

export class Empresa{
    dlv_id_seg:String;
    dlv_nome_seg:String;
}

@Injectable({
  providedIn: 'root'
})
export class SegmentoService {


  constructor(private http: HttpClient, ) { }

  getSegmentos()
  {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       

      })
    };

    const body = '';

    return this.http.get("http://localhost:6260/getSegmentos",  httpOptions).pipe(
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
