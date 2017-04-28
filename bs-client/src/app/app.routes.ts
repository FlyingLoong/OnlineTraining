import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomeComponent
  }
]

export const appRoutes = RouterModule.forRoot(routes);
