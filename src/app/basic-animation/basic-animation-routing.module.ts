import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanastaComponent } from './canasta/canasta.component';
import { HoverComponent } from './hover/hover.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'hover', component: HoverComponent},
      {path: 'canasta', component: CanastaComponent},
      {path: 'prueba', 
      loadChildren: () => import('./basic/basic.module')
        .then(m => m.BasicModule)
     },
      {path: '**', redirectTo: 'hover'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicAnimationRoutingModule { }
