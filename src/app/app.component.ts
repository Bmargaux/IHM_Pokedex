import { Component, ɵConsole } from '@angular/core';
import { ServiceAccesApiService } from './service-acces-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display: boolean = false;

  constructor(private servicePokemon: ServiceAccesApiService){}

  title = 'pokdemo';

  pokemons = [];
  pokemonsName = [];
  pokemonInfo = [];
  name:string;
  type = [];
  poids:string;
  stats = [];
  id:string;
  taille:string;


  regularDistribution = 100/3;

  ngOnInit() {

    this.servicePokemon.getPokedex().then((value:[]) => {

      this.pokemons = value;

    });

    this.servicePokemon.getName().then((value:[]) => {

      this.pokemonsName = value;
    });

     
  }



  showDialog(nom) {

    console.log("nom : " + nom);

    this.display = true;
    this.servicePokemon.getInfo(nom).then((value:[]) => {
    this.pokemonInfo = value;

    console.log(value);

    this.id = this.pokemonInfo[0].id;
    this.name = this.pokemonInfo[0].nam;
    this.type = this.pokemonInfo[0].typ;
    this.poids = this.pokemonInfo[0].poi;
    this.stats = this.pokemonInfo[0].sta;
    this.taille = this.pokemonInfo[0].tai;
    })


}

Add(){

  this.servicePokemon.getPokedex2(this.pokemons.length).then((value:[]) => {

  })

}

Accueil(){

}

onGetImageType(a){
  var img = ''
  switch(a){
    case "poison": {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/11.png";
    break;
    }
    case "grass" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/10.png";
    break;
    }
    case "fire" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/6.png";
    break;
    }
    case "flying" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/17.png";
    break;
    }
    case "water" : {
    img ="https://www.pokebip.com/pokedex/images/gen6_types/4.png";
    break;
    }
    case "bug" : {
    img ="https://www.pokebip.com/pokedex/images/gen6_types/8.png";
    break;
    }
    case "normal" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/9.png";
    break;
    }
    case "electric" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/5.png";
    break;
    }
    case "ground" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/14.png";
    break;
    }
    case "fairy" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/18.png";
    break;
    }
    case "fighting" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/2.png";
    break;
    }
    case "psychic" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/12.png";
    break;
    }
    case "rock" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/13.png";
    break;
    }
    case "steel" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/1.png";
    break;
    }
    case "ice" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/7.png";
    break;
    }
    case "ghost" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/15.png";
    break;
    }
    case "dragon" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/3.png";
    break;
    }
    case "dark" : {
    img = "https://www.pokebip.com/pokedex/images/gen6_types/16.png";
    break;
    }

  }
  return img;
}

}
