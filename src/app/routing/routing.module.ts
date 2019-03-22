import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetListComponent } from '../planet-list/planet-list.component';
import { PlanetDetailComponent } from '../planet-detail/planet-detail.component';
import { MainComponent } from '../main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/planet',
    pathMatch: 'full',
  },
  {
    path: 'planet',
    component: MainComponent,
    children: [
      {
        path: '',
        component: PlanetListComponent,
      },
      {
        path: ':id',
        component: PlanetDetailComponent,
      }
    ]
  },

]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
