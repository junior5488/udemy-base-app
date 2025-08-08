import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    //Configurar rutas con Lazy Loading
    loadComponent: () =>
      import('./pages/hero/hero-page').then(m => m.HeroPageComponent)
  },
  {
    path: 'villain',
    loadComponent: () =>
      import('./pages/villain/villain-page').then(m => m.VillainPageComponent)
  },
  {
    path: 'dragonball',
    loadComponent: () =>
      import('./pages/dragonball/dragonball-page').then(m => m.DragonballPage)
  },
  {
    path: 'dragonball-super',
    loadComponent: () =>
      import('./pages/dragonball-super/dragonball-super-page').then(m => m.DragonballSuperPage)
  },
  {
    path: '**',
    redirectTo: '',
  },
  // admin => AdminComponent

  // / => HomeComponent
];
