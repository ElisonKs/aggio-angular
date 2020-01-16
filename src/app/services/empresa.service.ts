import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError , retry} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

export class Empresa{
    dlv_id_emp:String;
    dlv_nome_emp:String;
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {


  constructor(private http: HttpClient, ) { }

  getEmpresas()
  {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       

      })
    };

    const body = '';

    return this.http.get("http://localhost:6260/getEmpresas",  httpOptions).pipe(
      retry(3),
      map((res) => {

        return res;
      }),
      catchError(this.handleError));
  }

  getEmpresas2() :Empresa[]{
    return Observable.create(observer => {
        this.http.get('http://localhost:6260/getEmpresas');
})}


  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  
}
