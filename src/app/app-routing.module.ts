import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'basic',
    loadChildren: () => import('./basic-animation/basic-animation.module')
    .then(m => m.BasicAnimationModule)
  },
  {
    path: 'intermedio',
    loadChildren: () => import('./intermediate-animation/intermediate-animation.module')
    .then(m => m.IntermediateAnimationModule)
  },
  {
    path:'**',
    redirectTo: 'basic'

  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule.forRoot(routes,{
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
