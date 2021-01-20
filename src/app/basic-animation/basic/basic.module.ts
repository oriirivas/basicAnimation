import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { PruebaComponent } from './prueba/prueba.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';


@NgModule({
  declarations: [PruebaComponent, EjemploComponent],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
