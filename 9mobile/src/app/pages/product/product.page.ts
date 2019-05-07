import { Component, OnInit } from '@angular/core';
import {Observable, observable} from "rxjs";
import {ProductService} from "../../services/product.service";
import {IPelis} from "../../model/IPelis.interface";
import {HttpClient} from "@angular/common/http";
import {CategoriaService} from "../../services/categoria.service";
import {ICategoria} from "../../model/ICategoria.interface";
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  API_ENDPOINT='http://workshop.test/api';
  ipelis:IPelis[];  icategoria:ICategoria[];


  constructor(private productService: ProductService,private httpClient:HttpClient,private  categoriaService:CategoriaService) {
   // httpClient.get(this.API_ENDPOINT+'/product').subscribe((data:IPelis[])=>{this.ipelis=data});
httpClient.get(this.API_ENDPOINT+'/compra').subscribe((data:ICategoria[])=>{this.icategoria=data});
  this.productService.tomar().subscribe((data:IPelis[])=>{this.ipelis=data},(error)=>{console.log('Error')});
  }

  ngOnInit() {
  }
refrescar(){
 this.productService.tomar().subscribe((data:IPelis[])=>{this.ipelis=data},(error)=>{console.log('Error')});

  }



}
