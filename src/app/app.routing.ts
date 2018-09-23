import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SearchComponent } from './modules/search/search.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    {path: 'dashboard', component: DashboardComponent },
    { path: 'search', loadChildren: './modules/search/search.module#SearchModule' },
    {
      path: 'listings',
      loadChildren: 'app/modules/listings/listings.module#ListingsModule'
    },
  ];
  export const routing = RouterModule.forRoot(APP_ROUTES);
