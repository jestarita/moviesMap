import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  constructor() { }
  coords:any= {coords:{latitude:0,longitude:0}};
  ngOnInit() {

    this.geolocaation()
  }
  

  geolocaation(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.coords = position.coords
      })
    }
  }

}
