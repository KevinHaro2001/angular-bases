//Modulo independiente, es algo que trabaja solo 
import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <hr>
        <h3>Counter: {{ counter }}</h3>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>
    `
})

export class CounterComponent {
    public counter: number = 10;

    //:void=No regresa nada
    increaseBy( value: number ):void {
        this.counter += value;
    }
    resetCounter():void {
        this.counter = 10;
    }
    //desincreaseBy():void { ESTO YO MISMO LO HICE A MI MANERA
    //  this.counter -=1;
    //}
}
