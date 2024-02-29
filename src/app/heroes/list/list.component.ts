import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //El *ngFor = En angular lo que hace es crearse que el elemento HTML, crea un template, osea lo clona
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string;
  removeLastHero():void {
    this.deleteHero = this.heroNames.pop();
    //console.log({ deleteHero })
  }
}
