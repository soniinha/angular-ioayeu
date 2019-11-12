import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[]; 
  pokemonSeleccionado: Pokemon;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
      this.pokemons = this.pokemonsService.getPokemons();

  this.pokemonsService.getPokemons()
                    .subscribe(dados => 
                    {
                      this.pokemons = dados.pokemon_entries;
                      
                      }
                      );
  }
  
  selectPokemon(id:number){
    this.pokemonsService.selectPokemon(id);
    
  }
}