import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Globals} from '../globals'



@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  
  constructor(private http:HttpClient,public globals:Globals) { }

  getEnderecosCep(cep)
  {
    return this.http.get(this.globals.apiUrl + 'endereco_json/retornar_endereco_cep/'+ this.globals.apiKey + "/"+ cep)
  }
}
