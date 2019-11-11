import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-pokemon',
  templateUrl: './detalhes-pokemon.component.html',
  styleUrls: ['./detalhes-pokemon.component.css']
})
export class DetalhesPokemonComponent implements OnInit {
  idPokemonSeleccionado: number;
  selectedPoke: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService){}

  ngOnInit() {
    this.route.paramMap
              .subscribe(params => 
                    this.idPokemonSeleccionado 
                    = +params.get('idPokemonSeleccionado'));
            
    this.pokemonsService.getPokemonById(this.idPokemonSeleccionado)
              .subscribe(pokemon => {this.selectedPoke = pokemon;
              console.log(this.selectedPoke);});
  }

}