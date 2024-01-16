import { Color, Cartographic } from 'cesium';
import { getImageryProvider, PropellerTerrainProvider } from '@propelleraero/cesium-loaders';


export function add(x: number, y: number): number {
  const c = new Color();
  return x + y;
}

export function mul(x: number, y: number): number {
  return x * y;
}
