import { Component, Input } from '@angular/core';

@Component({
  selector: 'farewell',
  template: `<h1>Farewell {{nickname}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class FarewellComponent {
  @Input() nickname: string;
}
