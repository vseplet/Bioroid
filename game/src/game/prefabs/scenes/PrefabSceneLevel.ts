/* eslint-disable @typescript-eslint/no-explicit-any */
import resources from "@game/resources";
import scripts from "@game/scripts";

export class PrefabSceneLevel extends Phaser.Scene {
  jsonLDTkName: string;
  levelNumber: number;
  decorationLayer: Phaser.Tilemaps.TilemapLayer | undefined;
  collisionLayer: Phaser.Tilemaps.TilemapLayer | undefined;

  constructor(name: string, jsonLDTkName: string, levelNumber: number) {
    super(name);
    this.jsonLDTkName = jsonLDTkName;
    this.levelNumber = levelNumber;
  }

  createMap(decorationTileset: string, scale: number) {
    const levels = this.cache.json.get(this.jsonLDTkName).levels;
    const levelData = levels[this.levelNumber];
    const layers = levelData.layerInstances;

    this.decorationLayer = scripts.createLDtkilemap(
      this,
      layers[2],
      decorationTileset,
    );

    this.collisionLayer = scripts.createCollisionLDtkTilemap(
      this,
      layers[1],
      resources.assets.tilesets.colliders,
      [0, 1],
    );

    this.collisionLayer?.setScale(
      scale,
      scale,
    );
    this.collisionLayer.setAlpha(0.5);
    this.decorationLayer.setScale(
      scale,
      scale,
    );
  }
}
