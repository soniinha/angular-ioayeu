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
    //  this.alunos = this.alunosService.getAlunos();

  this.pokemonsService.getPokemons()
                    .subscribe(dados => {
                      this.pokemons = dados.results;
                      console.log(this.pokemons)
                      }
                      );
  }
  
  selectPokemon(url:string){
    this.pokemonsService.selectPokemon(url);
    console.log(url);
  }
}