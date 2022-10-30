import {Component} from '@angular/core'


@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponent{
    numero: number = 20;
    base: number = 5;
    sumar = () => this.numero++;
    restar = () => this.numero--;
    acumular = (valor:number) => this.numero+=valor;
}