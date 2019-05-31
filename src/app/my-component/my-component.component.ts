import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { FilterPokemonPipePipe } from '../filter-pokemon--pipe.pipe';
import { ServiceAccesApiService } from '../service-acces-api.service';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {

  display: boolean = false;

  @Input() photos = [];
  @Input() id:string;
  @Input() name:number;
  @Input() url:string;
  @Input() urlback:string;
  @Input() types:string[];
  @Input() poids:string;
  @Input() stats = [];
  @Input() taille:string;

  

  private variable: boolean = true;
  
  constructor(private servicePokemon:ServiceAccesApiService) { 

  //console.log(this.photos)

  }


  ngOnInit() {

    this.photos = [{valeur : this.onGetImage(), type:"front"}, {valeur:this.onGetImageBack(), type:"back"}, {valeur:this.onGetImageShiny(), type:"shiny"}
    ];

    console.log(this.types)
  }

  getUrlPhoto(){

    console.log("test",this.url)

    return this.url;

  }

  onGetImage(){

    var url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png";
    return url;
  }

  onGetImageBack(){

    var urlback = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + this.id + ".png";
    return urlback;
  }

 onGetImageShiny(){

  var urlshiny = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + this.id + ".png"
  return urlshiny;
 }


onTest(){
  console.log(this.photos)
  console.log(this.id)
}


showDialog() {
    this.display = true;
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
