import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './components/country/country.component';
import { CountriesComponent } from './components/countries/countries.component';

const routes: Routes = [
   {
      path: 'ctry',
      component: CountryComponent
   },
   {
      path: '',
      component: CountryComponent
   },
   {
      path: 'ctrycode',
      component: CountriesComponent
   }
];

export const AppRoutes = RouterModule.forRoot(routes);
