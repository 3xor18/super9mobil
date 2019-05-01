import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observable} from "rxjs";
import {map} from "rxjs/operators";
import {IPelis} from "../model/IPelis.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public filtrado:string='1';
private  url:string='';
  private  apiKey:string='418162be';
  constructor(private http: HttpClient) { }



}
