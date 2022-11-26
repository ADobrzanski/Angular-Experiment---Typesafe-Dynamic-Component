import { Injector } from '@angular/core';

export type DynamicComponentConstructor<T> = { new (injector?: Injector): T };
