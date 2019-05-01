import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {IPelis} from "../../model/IPelis.interface";
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  API_ENDPOINT='http://workshop.test/api';
  ipelis:IPelis[];
  consult:string=this.productService.filtrado;
  consulta:string;
  constructor(private productService: ProductService,private httpClient:HttpClient) {
    httpClient.get(this.API_ENDPOINT+'/product').subscribe((data:IPelis[])=>{this.ipelis=data});
//httpClient.get(this.API_ENDPOINT+'/product/categoria?page='+this.productService.filtrado).subscribe((data:IPelis[])=>{this.ipelis=data});

  }

  ngOnInit() {
  }

}
