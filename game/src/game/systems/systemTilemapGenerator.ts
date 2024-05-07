/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateZeroArray } from "../helpers/generateZeroArray";

export function createLDtkilemap(
  scene: Phaser.Scene,
  layerData: any,
  tilesetImage: string,
): Phaser.Tilemaps.TilemapLayer {
  const __cHei = layerData.__cHei;
  const __cWid = layerData.__cWid;
  const __gridSize = layerData.__gridSize;

  const levelData = generateZeroArray(__cWid, __cHei);
  for (const tileData of layerData.gridTiles) {
    const x = tileData.px[0] / __gridSize, y = tileData.px[1] / __gridSize;
    levelData[y][x] = tileData.t;
  }

  const map = scene.make.tilemap({
    data: levelData,
    tileWidth: __gridSize,
    tileHeight: __gridSize,
  });

  const tiles = map.addTilesetImage(tilesetImage);
  const layer = map.createLayer(0, tiles!, 0, 0);

  return layer!;
}

export function createCollisionLDtkTilemap(
  scene: Phaser.Scene,
  layerData: any,
  tilesetImage: string,
  collisionIndexes: number[],
): Phaser.Tilemaps.TilemapLayer {
  const layer = createLDtkilemap(scene, layerData, tilesetImage);
  layer.setCollision(collisionIndexes, true);

  return layer;
}
