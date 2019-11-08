import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Pokemon } from './pokemons';

@Injectable()
export class PokemonsService {
  selectedPoke: Pokemon;
  private apiUrl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http : HttpClient) { 
  }



  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl + '?limit=151');
  }

  getPokemonById(id:number): Observable<Pokemon> {
    console.log(id);
    return this.http.get<Pokemon>(this.apiUrl + '/' + id);
  }

  selectPokemon(url:string){
    this.http.get<Pokemon>(url).subscribe(data => {this.selectedPoke = data; console.log(this.selectedPoke)});
  }

  getSelected(){
    return this.selectedPoke;
  }

}