import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'form3',
    pathMatch: 'full'
  },
  {
    path: 'form1',
    loadChildren: () => import('./form1/form1.module').then( m => m.Form1PageModule)
  },
  {
    path: 'form2',
    loadChildren: () => import('./form2/form2.module').then( m => m.Form2PageModule)
  },
  {
    path: 'form3',
    loadChildren: () => import('./form3/form3.module').then( m => m.Form3PageModule)
  },
  {
    path: 'form4',
    loadChildren: () => import('./form4/form4.module').then( m => m.Form4PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
