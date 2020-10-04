import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExplorarPage } from './explorar.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorarPage,
    children: [
      {
        path: 'libros',
        loadChildren: './libros/libros.module#LibrosPageModule'
      },
      {
        path: 'musica',
        loadChildren: './musica/musica.module#MusicaPageModule'
      },
      {
        path: 'peliculas',
        loadChildren: './peliculas/peliculas.module#PeliculasPageModule'
      },
      {
        path: '',
        redirectTo: '/explorar/libros',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/libros',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExplorarPage]
})
export class ExplorarPageModule {}
