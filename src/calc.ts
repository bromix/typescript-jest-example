import { Color, Cartographic } from 'cesium';
import { getImageryProvider, PropellerTerrainProvider } from '@propelleraero/cesium-loaders';
// import { add1 } from "../../typescript-jest-example_USED1/dist/calc.js";

export function add(x: number, y: number): number {
  const c = new Color();
  return x + y;
}

export function mul(x: number, y: number): number {
  return x * y;
}
