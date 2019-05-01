import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "./services/product.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appMenu=[
    {title:'Catalogo',url:'/catalogo',icon:'list',parametro:'no'},
    {title:'Arroz',url:'/detailproduct',icon:'add',parametro:'1'},
    {title:'ACEITE',url:'/detailproduct',icon:'trash',parametro:'2'},
    {title:'AZUCAR',url:'/detailproduct',icon:'trash',parametro:'3'},
    {title:'Otro',url:'/detailproduct',icon:'trash',parametro:'4'},
    {title:'Otro',url:'/detailproduct',icon:'trash',parametro:'5'},
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private productService: ProductService,
    private httpClient:HttpClient
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  setea2(n){
    this.productService.filtrado=n;
  }

}
