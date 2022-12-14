import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
        console.log("Servicio inicializado");
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }

    limpiarLista(){
        this._personajes.splice(0);
    }

}