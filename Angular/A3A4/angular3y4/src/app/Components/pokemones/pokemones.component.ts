import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css'],
  providers: [PokemonService]
})

export class PokemonesComponent implements OnInit{

  //@Input() public pokemons: Array<any>;
  @Input() public name: String;

  @Input() public url: String;

  items: any;
    constructor(private _pokemonService: PokemonService) {
      this.name = "";
      this.url = "";
    }
  changePokemons(event:Event) {
    this._pokemonService.type=(event.target as HTMLInputElement).value;
    console.log(this._pokemonService.type)
    this.ngOnInit();
  }
  ngOnInit() :void{
    this._pokemonService.getPokemons().subscribe(
      response => {
        for(var index in response.pokemon) {
          var item=response.pokemon[index];
          this.items=response.pokemon;
            console.log(item);
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
