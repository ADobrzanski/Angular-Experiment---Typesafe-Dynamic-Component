import { DynamicComponentConstructor } from './dynamic-component-constructor.type';

export type DynamicComponentContainer = <R>(
  cont: <T extends {} = {}>(
    classRef: DynamicComponentConstructor<T>,
    props: T
  ) => R
) => R;
