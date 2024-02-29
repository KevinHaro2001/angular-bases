//corazon, parte importante
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;
  get capitalizedName(): string { //Propiedad
    return this.name.toUpperCase();
  }
  //Si es publico no se define y si es privado hay que ponerle "private"
  getHeroDescription():string { //Esto es un metodo
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    /*/TODO:
    throw 'Metodo no implementado'*/
    this.name = 'Spiderman';
  }
  changeAge():void {
    this.age = 25;
  }
  /*changeHero2():void {
    //TODO:
    throw 'Metodo no implementado'
    this.name = 'Ironman';
  }
  changeAge2():void {
    this.age = 45;
  }*/
  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;
    //ESTO NO SE DEBE DE HACER NUNCA
    //document.querySelector('h1')!.innerHTML='<h1>Desde Angular</h1>';
    // document.querySelectorAll('h1')!.forEach( element => { //Solo cambia a todos los H1, de manera general
    //   element.innerHTML ='<h1>Desde Angular</h1>';
    // })
  }
}
