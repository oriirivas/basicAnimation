import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PruebaComponent } from './prueba/prueba.component';
import { TransformOriginComponent } from './transform-origin/transform-origin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'prueba', component: PruebaComponent},
      {path: 'ejemplo', component: EjemploComponent},
      {path: 'origenTransformaciones', component: TransformOriginComponent},
      {path: 'animation', component: AnimationComponent},
      {path: '**', redirectTo: 'prueba'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
