import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { HeaderComponent } from './planet-list/header/header.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetService } from './planet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RoutingModule } from './routing/routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    HeaderComponent,
    PlanetDetailComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RoutingModule,
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
