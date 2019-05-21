import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import {AgmCoreModule} from '@agm/core';
import { MoviesComponent } from './componentes/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './servicios/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapaComponent,
    UbicacionComponent,
    MoviesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCIcq5JuNGX4lufT7uj1cf4q0Ly-L57s38'
    })
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
