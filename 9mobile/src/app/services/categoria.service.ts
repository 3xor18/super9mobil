import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  API_ENDPOINT='http://workshop.test/api';
  constructor(private  httpClient:HttpClient) { }

}
