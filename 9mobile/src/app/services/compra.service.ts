import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ICompra} from "../model/ICompra.interface";

@Injectable({
  providedIn: 'root'
})
export class CompraService {
API_ENDPOINT='http://workshop.test/api';
  constructor(private httpClient:HttpClient) { }
  save(compra:ICompra){
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'/compra',compra,{headers:headers});
  }
}
