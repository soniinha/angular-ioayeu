import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { DetalhesPokemonComponent } from './detalhes-pokemon/detalhes-pokemon.component';
import { PokemonsService } from './pokemons.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PokemonsComponent, DetalhesPokemonComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PokemonsService]
})
export class AppModule { }
