import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorarPage } from './explorar.page';

const routes: Routes = [
  {
    path: 'explorar',
    component: ExplorarPage,
    children: [
      {
        path: 'libros',
        loadChildren: '../pages/explorar/libros/libros.module#LibrosPageModule'
      },
      {
        path: 'musica',
        loadChildren: '../pages/explorar/musica/musica.module#MusicaPageModule'
      },
      {
        path: 'peliculas',
        loadChildren: '../pages/explorar/peliculas/peliculas.module#PeliculasPageModule'
      },
      {
        path: '',
        redirectTo: '/explorar/libros',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/explorar/libros',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorarPageRoutingModule {}
