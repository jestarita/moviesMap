import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { MoviesComponent} from './componentes/movies/movies.component'
const routes: Routes = [
  {path:'', redirectTo:'navbar', pathMatch:'full'},
  {path:'navbar', component:NavbarComponent, children:[
    {path:'mapa', component:MapaComponent},
    {path:'ubicacion', component:UbicacionComponent},
    {path:'movies',component: MoviesComponent}
  ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
