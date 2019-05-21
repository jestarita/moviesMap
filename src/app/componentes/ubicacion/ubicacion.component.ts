import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/servicios/movies.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss']
})
export class UbicacionComponent implements OnInit {

  constructor(private movies:MoviesService) { }

  ngOnInit() {
      console.log(this.movies.selectedViewMovie);
      
  }

}
