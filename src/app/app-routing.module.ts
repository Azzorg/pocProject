import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'discover', loadChildren: './discover/discover.module#DiscoverPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'trip-creation-three', loadChildren: './trip-creation-three/trip-creation-three.module#TripCreationThreePageModule' },  { path: 'trip-creation-one', loadChildren: './trip-creation-one/trip-creation-one.module#TripCreationOnePageModule' },
  { path: 'trip-creation-two', loadChildren: './trip-creation-two/trip-creation-two.module#TripCreationTwoPageModule' },
  { path: 'trip', loadChildren: './trip/trip.module#TripPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
