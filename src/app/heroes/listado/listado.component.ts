import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Ironman", "Huld", "Thor"];
  heroesBorrados: string[] = [];

  borrarHeroe(): void {
    const heroeBorrado = this.heroes.shift() || '';
    this.heroesBorrados.push(heroeBorrado);
  }
  agregarHeroe(heroe:string){
    this.heroes.push(heroe);
    this.heroesBorrados.splice(this.heroesBorrados.indexOf(heroe),1);
  }
}
