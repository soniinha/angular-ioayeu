import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}