export class Pokemon {

    constructor ( public id:number, public name:string, public photo:string, public types:string[], public poids:string, public stats:string[], public taille:string ){
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.types = types;
        this.poids = poids;
        this.stats = stats;
        this.taille = taille;

    }

    getid(){
        this.id
    }

    getname(){
        this.name
    }

    getphoto(){
        this.photo
    }
}
