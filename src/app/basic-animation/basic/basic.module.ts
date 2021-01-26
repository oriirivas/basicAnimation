import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { PruebaComponent } from './prueba/prueba.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { TransformOriginComponent } from './transform-origin/transform-origin.component';
import { AnimationComponent } from './animation/animation.component';


@NgModule({
  declarations: [PruebaComponent, EjemploComponent, TransformOriginComponent, AnimationComponent],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
