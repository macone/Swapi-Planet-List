import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})

export class PlanetListComponent implements OnInit {

  planets: Planet[];
  planetsMemory: Planet[] = []
  listSize = 10;
  p:number;


  constructor(
    private planetService: PlanetService,
  ) { }

  ngOnInit() {
    this.getPlanets();
    this.planetsMemory = this.planets;
  }

  getPlanets() {
    if (this.planetService.planetsListStorage === undefined) {
      this.planets = this.planetService.planetList()
    } else {
      this.planets = this.planetService.planetsListStorage;
    }
;
  }

  searchPlanetName() {
    let searchInput = (<HTMLInputElement>document.getElementById('search')).value.toLowerCase();
    let mem = this.listSize
    this.listSize = 61;
    this.planets = []
    this.planetsMemory.forEach(element => {

      if(element.name.toLowerCase().indexOf(searchInput) > -1){
        this.planets.push(element)
      }
    });
    this.listSize = mem;
  }

  setlistSize(num: number) {
    this.listSize = num;
  }
}


