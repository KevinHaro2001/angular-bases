import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  //Decirle al mundo exterior que puede recibir este componente
  exports: [
    HeroComponent,
    ListComponent
  ],
  //CommonModule: es un módulo de Angular que proporciona las directivas y tuberías comunes que son ampliamente utilizadas en la mayoría de las aplicaciones
  imports: [
    CommonModule
  ]
})
export class HeroesModule {

}
