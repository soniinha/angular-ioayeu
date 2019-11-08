import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonsService {

  private URLAPI = "https://pokeapi.co/api/v2";

  constructor(private http : HttpClient) { }

    getAlunos(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.URLAPI);
  }

}