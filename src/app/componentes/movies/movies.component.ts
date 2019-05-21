import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/servicios/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  datas: any;
  constructor(private movies: MoviesService, private router: Router) { }

  ngOnInit() {
    this.listMovie()
    this.listGeneros()
  }

  urlImg = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'
  everyData: any;
  generos: any;
  listMovie() {
    this.movies.listMovies().subscribe((data: any) => {
      this.everyData = data.results;
      this.datas = data.results
    })
  }


  listGeneros() {
    this.movies.listGeneros().subscribe((data: any) => {
      this.generos = data.genres
    })
  }

  vireMOre(param) {
    this.movies.selectedViewMovie = param
    this.router.navigate([`navbar/ubicacion`])
  }
  searchText: any
  showSearchResults(event) {

  }

  selecciones: any = []
  selected(event, genero) {

    if (this.selecciones.length == 0) {
      this.selecciones.push(genero);
      this.filters()
      return
    }

    var temp = undefined;
    for (let i = 0; i < this.selecciones.length; i++) {
      if (this.selecciones[i].name == genero.name) {
        temp = i
      }
    }
    if (temp == undefined) {
      this.selecciones.push(genero)
      this.filters()
    } else {
      this.selecciones.splice(temp, 1);
      if (this.selecciones.length != 0) {
        this.filters()
      }else{
        this.everyData = this.datas
      }
    }

  }


  filters() {
    
    this.everyData = this.datas
    var array = []
    for (let i = 0; i < this.selecciones.length; i++) {
      for (let y = 0; y < this.datas.length; y++) {
        for (let z = 0; z < this.datas[y].genre_ids.length; z++) {
            if (this.selecciones[i].id == this.datas[y].genre_ids[z]) {
                  array.push(this.datas[y])
                  
            }
        }
      }
    }
  this.everyData =  this.removeDuplicates(array,'id');
  }


  removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};
    for(var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    for(i in lookupObject) {
    newArray.push(lookupObject[i]);
    }
    return newArray;
    }
}
