import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAnimationRoutingModule } from './basic-animation-routing.module';

import { CanastaComponent } from './canasta/canasta.component';
import { HoverComponent } from './hover/hover.component';


@NgModule({
  declarations: [HoverComponent, CanastaComponent],
  imports: [
    CommonModule,
    BasicAnimationRoutingModule
  ]
})
export class BasicAnimationModule { }
