import { add, mul } from "../src/calc";
//import { add as add1 } from "../src/calc2";
import { Cartesian3 } from "@cesium/engine";
import {
  centreVertices,
  computeFaceNormals,
  computeVertexNormals,
} from '@propelleraero/geometry-algorithms';

describe("centreVertices", () => {

  it("should handle no vertices", () => {
    const result = new Cartesian3(1, 1, 0);

    expect(result.x).toEqual(1);
  });

  it("should return 15 for add(10,5)", () => {
    expect(add(10, 5)).toBe(15);
  });

  it("should return 5 for add(2,3)", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("test mul function", () => {
  it("should return 15 for mul(3,5)", () => {
    expect(mul(3, 5)).toBe(15);
  });
});
