import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/guards/auth.guard';
import { NoLoginGuard } from '../app/guards/no-login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),canActivate:[NoLoginGuard]
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),canActivate:[NoLoginGuard]
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'edit-producto',
    loadChildren: () => import('./edit-producto/edit-producto.module').then( m => m.EditProductoPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'pagina',
    loadChildren: () => import('./pagina/pagina.module').then( m => m.PaginaPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'edit-categoria',
    loadChildren: () => import('./edit-categoria/edit-categoria.module').then( m => m.EditCategoriaPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'mostrar-pedido',
    loadChildren: () => import('./mostrar-pedido/mostrar-pedido.module').then( m => m.MostrarPedidoPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule),canActivate:[NoLoginGuard]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'mostrar-cliente-pedido',
    loadChildren: () => import('./mostrar-cliente-pedido/mostrar-cliente-pedido.module').then( m => m.MostrarCLientePedidoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
