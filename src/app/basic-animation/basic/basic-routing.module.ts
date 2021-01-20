import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'prueba', component: PruebaComponent},
      {path: 'ejemplo', component: EjemploComponent},
      {path: '**', redirectTo: 'prueba'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
