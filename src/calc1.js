import { Color, Cartographic } from '@cesium/engine';
import { getImageryProvider, PropellerTerrainProvider } from '@propelleraero/cesium-loaders';

const demoQuarryPitShellDesignUrl =
'https://srv-01-ap-southeast-2.blob-data.propelleraero.com/ob70131da9/?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8qL29iNzAxMzFkYTkvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTU4NzA4NDU0Nn19fV19&Signature=MxiXWZDM2l1VXeYBEsAAgjyL-RSqaNOyAzDWEbiSO-CQkLOqU13imqFWV2jP0Ga-pAJWhQhLIVm2EbLaBYcvq-L2c1qsIGwmFJw2G5EMG1IYFR4Y5xkBwW1i9GC0rCgS5KYJdOR5rDZukY~6neUIDK1Zz5S-uZxU9woc-eoRKNTMRIfEKau-9LTQjjCL6tn1IDET95LJHNFPt8~C2SEY8xv95qyye-2zpn1APedDL4xTzB8btU78Iisl5Ma-pw14kKvR~zuO~NX7shOHLbRkOummAVBVfT7NBui86SUawwm~oBQM0yuvjE23G9pD1EearXoQ1uzDfiAEuQNr2QsRdg__&Key-Pair-Id=APKAIXIRK6NGYIQLTVYQ&response-content-disposition=attachment&response-cache-control=max-age=31536000';


export function add(x: number, y: number): number {
  const r = new Color();

  const terrainProvider = new PropellerTerrainProvider({
    url: demoQuarryPitShellDesignUrl,
    requestWaterMask : false
  });
  
  return x + y + -1 +r.alpha;
}

export function mul(x: number, y: number): number {
  //const orthoImageryProvider = getImageryProvider(null);
  return x * y;
}



  