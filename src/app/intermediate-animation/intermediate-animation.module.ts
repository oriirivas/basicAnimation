import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntermediateAnimationRoutingModule } from './intermediate-animation-routing.module';
import { SegundoComponent } from './segundo/segundo.component';
import { PrimeroComponent } from './primero/primero.component';


@NgModule({
  declarations: [SegundoComponent, PrimeroComponent],
  imports: [
    CommonModule,
    IntermediateAnimationRoutingModule
  ]
})
export class IntermediateAnimationModule { }
