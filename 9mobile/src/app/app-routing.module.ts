import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', loadChildren: './pages/product/product.module#ProductPageModule' },
  { path: 'detailproduct', loadChildren: './pages/detailproduct/detailproduct.module#DetailproductPageModule' },
  { path: 'catalogo', loadChildren: './pages/catalogo/catalogo.module#CatalogoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
