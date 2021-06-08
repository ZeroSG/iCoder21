import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonData, PokemonRespone} from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonUrl: string ='';
  pokemonDataList: PokemonData[] = [];
  constructor(public http: HttpClient) {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto')
    .subscribe(response=>{
      this.pokemonUrl = response.sprites.front_default;
    })
    this.http.get<PokemonRespone>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
    .subscribe(response=>{
      this.pokemonDataList = response.results;
    })
   }
  ngOnInit(): void {
  }

  movement(el: HTMLImageElement){
    el.animate({transform:'translateX(100px) rotate(20deg)'},{duration:500})
  }
  showPo(pokemon: PokemonData){
    this.http.get<Pokemon>(pokemon.url)
    .subscribe((response)=>{
      this.pokemonUrl = response.sprites.front_default;
    })
  }
}
