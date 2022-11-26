import { DynamicComponentConstructor } from './models/dynamic-component-constructor.type';
import { DynamicComponentContainer } from './models/dynamic-component-container.type';
import { PublicProperties } from './models/public-properties.type';

export function makeComponentContainer<T extends {}>(
  classRef: DynamicComponentConstructor<T>,
  props: PublicProperties<T>
): DynamicComponentContainer {
  return <R>(
    cont: <T extends {}>(
      cR: DynamicComponentConstructor<T>,
      p: PublicProperties<T>
    ) => R
  ) => cont(classRef, props);
}

export function makeContainerFactory<T extends {}>(
  classRef: DynamicComponentConstructor<T>
) {
  return (props: PublicProperties<T>) =>
    makeComponentContainer(classRef, props);
}
