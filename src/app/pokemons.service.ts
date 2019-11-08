import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Poke } from './pokemons';

@Injectable()
export class PokemonsService {

  private apiUrl = "https://pokeapi.co/api/v2";

  constructor(private http : HttpClient) { 
  }

  getPoke(): Observable<Poke[]> {
    // return of(ALUNOS);
    return this.http
           .get<Poke[]>(this.apiUrl + '&results=20');
  }

  getPokeById(id:number): Observable<Poke> {
    console.log(id);
    return this.http.get<Poke>(this.apiUrl + '$results=1&page=' + id);
  }

}