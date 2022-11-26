import { Component, VERSION } from '@angular/core';
import { FarewellComponent } from './components/farewell.component';
import { HelloComponent } from './components/hello.component';
import {
  makeComponentContainer,
  makeContainerFactory,
} from './dynamic-component-utils';
import { DynamicComponentContainer } from './models/dynamic-component-container.type';

const makeHelloComponent = makeContainerFactory(HelloComponent);

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
    <!-- add trackby -->
    <ng-container *ngFor="let comp of dynamicComponentList">
      <app-dynamic-component [componentContainer]="comp">
      </app-dynamic-component>
    </ng-container>
  `,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  dynamicComponentList: DynamicComponentContainer[] = [
    makeComponentContainer(HelloComponent, { name: 'Karol' }),
    makeComponentContainer(HelloComponent, { name: 'Andrzej' }),
    makeComponentContainer(FarewellComponent, { nickname: 'Izabela' }),
    makeHelloComponent({ name: 'Jacek' }),
  ];
}
