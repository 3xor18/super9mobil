import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ProductService} from "../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {IPelis} from "../../model/IPelis.interface";
import {ICompra} from "../../model/ICompra.interface";
import {CompraService} from "../../services/compra.service";
import {element} from "protractor";
import {NavController} from "@ionic/angular";
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  ipelis:IPelis[];
  compra:ICompra={id_cliente:'1',id_producto:null,cantidad:'1'};

@Input() nombre;
  @Input() id;
  constructor(private modalCtrl:ModalController,private productService: ProductService,private httpClient:HttpClient,
              private compraService:CompraService,private  nav:NavController,private router: Router) {

  }

  ngOnInit() {
  }
salir1(){
  this.modalCtrl.dismiss(
      {
        nombre:'Gerson',
        id:'Aponte'
      }
  );
}
  salir2(){
    this.modalCtrl.dismiss(
        {
          nombre:'',
          id:''
        }
    );
      this.router.navigate(['/product']);
  }
  post(){
      this.compra.id_producto=this.id;
      this.compraService.save(this.compra).subscribe((data)=>{
          alert('Producto Agregado!');
      },(error)=>{
          console.log(error);
          alert('Ocurrio Un Error!');
      });
     window.location.reload(true);
     this.salir2();
  }
}
