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
  typePoke: string;
  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService){}

  ngOnInit() {
    this.route.paramMap
              .subscribe(params => 
                    this.idPokemonSeleccionado 
                    = +params.get('idPokemon'));
            
    this.pokemonsService.getPokemonById(this.idPokemonSeleccionado)
              .subscribe(pokemon => {this.selectedPoke = pokemon;
              this.getTypePoke();
              console.log(this.selectedPoke);});


            
  }

  getTypePoke(): void{
    this.typePoke = "";
    this.selectedPoke.types.forEach(t => this.typePoke+= t.type.name + ", ");
    this.typePoke = this.typePoke.substring(0, this.typePoke.length-2);
  };

}