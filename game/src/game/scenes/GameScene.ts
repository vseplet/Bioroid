/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { phaserConfig } from "../phaserConfig";
import { generateZeroArray } from "../helpers/generateZeroArray";
import { Player } from "../objects/Player";

export class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.json({
      key: "levels.ldtk",
      url: "assets/tilemaps/levels.ldtk",
    });

    this.load.spritesheet("LevelTileset", "assets/tilesets/level/level.png", {
      frameWidth: 8,
      frameHeight: 8,
    });
  }

  create() {
    const levels = this.cache.json.get("levels.ldtk");

    const level1 = levels.levels[0];
    const layers = level1.layerInstances;
    const entitiesLayer = layers[0];
    const decorationLayer = layers[1];
    const collisionLayer = layers[2];

    const __cHei = decorationLayer.__cHei;
    const __cWid = decorationLayer.__cWid;
    const __gridSize = decorationLayer.__gridSize;

    const levelData = generateZeroArray(__cWid, __cHei);
    // make decore
    for (const tileData of decorationLayer.gridTiles) {
      // console.log(tileData);
      const x = tileData.px[0] / __gridSize, y = tileData.px[1] / __gridSize;
      // console.log(`${x} ${y}`);
      levelData[y][x] = tileData.t;
    }

    const map = this.make.tilemap({
      data: levelData,
      tileWidth: __gridSize,
      tileHeight: __gridSize,
    });

    const tiles = map.addTilesetImage("LevelTileset");
    const layer = map.createLayer(0, tiles!, 0, 0);

    layer?.setCollision([0, 1, 2, 3, 42, 43], true);
    layer?.setScale(5, 5);

    const hero = new Player({
      scene: this,
      x: phaserConfig.width / 2,
      y: 100,
      texture: "Hero",
    });

    // layer?.setCollisionByProperty({ collides: true });
    this.physics.add.collider(hero, layer!);

    this.physics.world.setBounds(
      0,
      0,
      phaserConfig.width * 5,
      phaserConfig.height * 5,
    );

    this.cameras.main.startFollow(hero);

    // map.renderDebug(this.add.graphics(), {
    //   tileColor: null, // Non-colliding tiles
    //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200), // Colliding tiles
    //   faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Colliding face edges
    // });
  }

  update(_time: number, _delta: number): void {
  }
}
