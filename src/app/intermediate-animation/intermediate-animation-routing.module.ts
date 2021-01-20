import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'primero', component: PrimeroComponent
      },
      {
        path:'segundo', component: SegundoComponent
      },
      {
        path: '**', redirectTo: 'primero'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntermediateAnimationRoutingModule { }
