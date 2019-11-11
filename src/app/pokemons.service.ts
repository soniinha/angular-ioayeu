import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonsService {
  selectedPoke: Pokemon;
  private apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http : HttpClient) { 
  }



  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl + '?limit=151');
  }

  getPokemonById(id:number): Observable<Pokemon> {
    console.log(id);
    return this.http.get<Pokemon>(this.apiUrl + id+1);
  }

  selectPokemon(id:number){
    return this.http.get<Pokemon>(id).subscribe(data => {this.selectedPoke = data; });
  }

  getSelected(){
    return this.selectedPoke;
  }

}