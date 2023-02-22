import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorComponent } from './Componentes/selector/selector.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
