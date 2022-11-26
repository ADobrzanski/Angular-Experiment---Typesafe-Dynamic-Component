import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponentContainer } from './models/dynamic-component-container.type';

@Component({
  selector: 'app-dynamic-component',
  template: '',
})
export class DynamicComponent implements OnChanges {
  @Input() componentContainer: DynamicComponentContainer;

  constructor(private readonly viewContainerRef: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.viewContainerRef.clear();

    this.componentContainer((classRef, props) => {
      const comp = this.viewContainerRef.createComponent(classRef);
      Object.entries(props).forEach(([key, value]) => {
        comp.instance[key] = value;
      });
    });
  }
}
