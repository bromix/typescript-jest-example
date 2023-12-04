import { Color  } from "@cesium/engine";

export function add(x: number, y: number): number {
  const r = new Color();
  return x + y ;
}

export function mul(x: number, y: number): number {
  return x * y;
}
