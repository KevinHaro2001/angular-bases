import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  //Decirle al mundo exterior que puede recibir este componente
  exports: [
    CounterComponent
  ]
})
export class CounterModule {

}
