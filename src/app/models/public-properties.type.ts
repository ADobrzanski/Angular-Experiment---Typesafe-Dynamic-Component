export type PublicProperties<T extends {}, K = keyof T> = K extends keyof T
  ? Pick<T, K>
  : never;
