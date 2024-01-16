import { add, mul } from "../src/calc";
import { Color, Cartographic } from 'cesium';
import { getImageryProvider, PropellerTerrainProvider } from '@propelleraero/cesium-loaders';

describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    const c = new Color();
    expect(add(10, 5)).toBe(15);
  });

  it("should return 5 for add(2,3)", () => {
    new PropellerTerrainProvider();
    expect(add(2, 3)).toBe(5);
  });
});

describe("test mul function", () => {
  it("should return 15 for mul(3,5)", () => {
    expect(mul(3, 5)).toBe(15);
  });
});
