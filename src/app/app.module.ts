import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { DetalhesPokemonComponent } from './detalhes-pokemon/detalhes-pokemon.component';
import { PokemonsService } from './pokemons.service';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const rotas: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'pokemons', component: PokemonsComponent},
  { path: 'pokemons/:idPokemon', component: DetalhesPokemonComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(rotas)],
  declarations: [ AppComponent, HelloComponent, PokemonsComponent, DetalhesPokemonComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PokemonsService],
  exports: [ RouterModule ]
})
export class AppModule { }
