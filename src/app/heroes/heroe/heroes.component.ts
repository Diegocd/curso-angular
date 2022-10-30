import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes',
    templateUrl: 'heroes.component.html'
})

export class HeroesComponent {
    nombre: string = "Diego";
    edad: number = 33;

    get nombreCaps(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre = () => this.nombre = "Spiderman";
    cambiarEdad = () => this.edad = 34;
}