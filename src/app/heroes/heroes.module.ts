import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroe/heroes.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    HeroesComponent, ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
