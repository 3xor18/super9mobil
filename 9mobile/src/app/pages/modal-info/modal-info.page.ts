import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ProductService} from "../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {IPelis} from "../../model/IPelis.interface";
import {ICompra} from "../../model/ICompra.interface";
import {CompraService} from "../../services/compra.service";

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
              private compraService:CompraService) {}

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
  }
  post(){
      this.compra.id_producto=this.id;
      this.compraService.save(this.compra).subscribe((data)=>{
          alert('Producto Agregado!');
      },(error)=>{
          console.log(error);
          alert('Ocurrio Un Error!');
      });
this.salir2();
  }
}
