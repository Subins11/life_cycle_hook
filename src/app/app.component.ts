import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'life_cycle_hook';

inputText: string="";
destroy: boolean=true;

  onSubmit= (inputEL: HTMLInputElement) =>{
this.inputText=inputEL.value
console.log(this.inputText)
  }

  onDestroy=() =>{
    this.destroy= false;
  }
}
