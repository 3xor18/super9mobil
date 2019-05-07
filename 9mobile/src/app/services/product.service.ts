import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {IPelis} from "../model/IPelis.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_ENDPOINT='http://workshop.test/api';
  filtrado:string='1';
  constructor(private httpClient: HttpClient) { }
  tomar(){
  return this.httpClient.get(this.API_ENDPOINT+'/product');
}

}
