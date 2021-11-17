import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    children: [
      {
        path: '',
        loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: ":id",
        loadChildren: () => import('./productos/detalle-productos/detalle-productos.module').then( m => m.DetalleProductosPageModule)
      },

      {
        path: "actualizar-producto/:id",
        loadChildren: () => import('./productos/actualizar-producto/actualizar-producto.module').then( m => m.ActualizarProductoPageModule)
      }

    ]
    
  },
  {
    path: 'agregar-producto',
    loadChildren:() => import('./productos/agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'carro-compra',
    loadChildren: () => import('./carro-compra/carro-compra.module').then( m => m.CarroCompraPageModule)
  }

  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
