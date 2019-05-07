import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {IPelis} from "../../model/IPelis.interface";
import {ModalInfoPage} from "../modal-info/modal-info.page";
import {ModalController, NavController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.page.html',
  styleUrls: ['./detailproduct.page.scss'],
})
export class DetailproductPage implements OnInit {
  API_ENDPOINT='http://workshop.test/api';
  ipelis:IPelis[];
  consult:string=this.productService.filtrado;
consulta:string;
  constructor(private router: Router,private productService: ProductService,private httpClient:HttpClient,private modalCtrl:ModalController) {
    httpClient.get(this.API_ENDPOINT+'/product').subscribe((data:IPelis[])=>{this.ipelis=data});
//httpClient.get(this.API_ENDPOINT+'/product/categoria?page='+this.productService.filtrado).subscribe((data:IPelis[])=>{this.ipelis=data});

  }

  ngOnInit() {
  }
  saluda(){
    console.log('hola');
  }
  async abrirmodal($product_id,$nombre){
    const modal=await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        id: $product_id,
        nombre: $nombre
      }
    });
    await modal.present();
   // const {data}=await modal.onDidDismiss();
    //console.log('Retorno:',data);
    this.router.navigate(['/product']);
  }
}
