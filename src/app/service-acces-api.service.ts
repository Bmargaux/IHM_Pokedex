import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { element } from '@angular/core/src/render3';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccesApiService {

  apiURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=19'
  apiURLall = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=900'
  apiOne = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  pokemons = [];
  pokemonsName = [];
  pokemonInfo = [];


  async getName() {

    return new Promise((resolve, reject) => {

      this.http.get(this.apiURLall, { responseType: 'text' })
        .subscribe(
          async (data) => {
            for (var i = 0; i < JSON.parse(data).results.length - 1; i++) {

              var id = JSON.parse(data).results[i].url.split('/');
              var id2 = id[id.length - 2];

              this.pokemonsName.push({ label: JSON.parse(data).results[i].name, value: JSON.parse(data).results[i].name, index: id2 })
            }

            resolve(this.pokemonsName);

          },
          err => {
            console.log("err : " + err.message);
          }
        );
    })

  }


  async getInfo(name) {
    return new Promise((resolve, reject) => {

      var type = [];
      var poids;
      var taille;
      var stats = [];
      var url = this.apiOne + name + '/'
      var idpok;
      this.pokemonInfo = [];


      console.log("coucou" + url);

      this.http.get(url, { responseType: 'text' })
        .subscribe(
          async (data) => {

            JSON.parse(data).types.forEach(element => {

              type.push(element.type.name)

            });

            JSON.parse(data).stats.forEach(element => {

              stats.push({ type: element.stat.name, valeur: element.base_stat })
            });

            poids = JSON.stringify(JSON.parse(data).weight)

            taille = JSON.stringify(JSON.parse(data).height)

            idpok = JSON.stringify(JSON.parse(data).id)

            this.pokemonInfo.push({ id: idpok, nam: name, typ: type, poi: poids, sta: stats, tai: taille })

            resolve(this.pokemonInfo);

          },
          err => {
            console.log("err : " + err.message);
          }
        );
    })
  }



  async getPokedex() {

    return new Promise((resolve, reject) => {


      this.http.get(this.apiURL, { responseType: 'text' })
        .subscribe(
          async (data) => {

            //console.log(JSON.parse(data).results)

            for (var i = 0; i < JSON.parse(data).results.length - 1; i++) {

              await this.recupData(JSON.parse(data).results[i].url).then((value: any[]) => {

                var id = JSON.parse(data).results[i].url.split('/');
                var id2 = id[id.length - 2];
                //console.log(id2)
                //console.log(value)

                this.pokemons.push(new Pokemon(id2, JSON.parse(data).results[i].name, value[0], value[1], value[2], value[3], value[4]))
              })

            }

            resolve(this.pokemons);

          },


          err => {
            console.log("err : " + err.message);
          }
        );

    })
  }


  async getPokedex2(debut) {

    return new Promise((resolve, reject) => {

      var url = 'https://pokeapi.co/api/v2/pokemon/?offset=' + debut + '&limit=19'

      this.http.get(url, { responseType: 'text' })
        .subscribe(
          async (data) => {

            //console.log(JSON.parse(data).results)

            for (var i = 0; i < JSON.parse(data).results.length - 1; i++) {

              await this.recupData(JSON.parse(data).results[i].url).then((value: any[]) => {

                var id = JSON.parse(data).results[i].url.split('/');
                var id2 = id[id.length - 2];
                //console.log(id2)
                //console.log(value)

                this.pokemons.push(new Pokemon(id2, JSON.parse(data).results[i].name, value[0], value[1], value[2], value[3], value[4]))
              })

            }

            resolve(this.pokemons);

          },


          err => {
            console.log("err : " + err.message);
          }
        );

    })
  }



  async recupData(url) {
    return new Promise((resolve, reject) => {

      var photo;
      var type = [];
      var poids;
      var stats = [];
      var taille;

      this.http.get(url, { responseType: 'text' })
        .subscribe(
          (data) => {
            //console.log(JSON.stringify(JSON.parse(data).sprites.front_default))
            photo = JSON.stringify(JSON.parse(data).sprites.front_default)

            JSON.parse(data).types.forEach(element => {

              type.push(element.type.name)

            });

            JSON.parse(data).stats.forEach(element => {

              stats.push({ type: element.stat.name, valeur: element.base_stat })
            });

            poids = JSON.stringify(JSON.parse(data).weight)
            taille = JSON.stringify(JSON.parse(data).height)
            var tab = [photo, type, poids, stats, taille]
            resolve(tab);
          },
        );

    })

  }







}

