/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { phaserConfig } from "../phaserConfig";
import { Player } from "../objects/Player";
import {
  createCollisionLDtkTilemap,
  createLDtkilemap,
} from "../systems/systemTilemapGenerator";

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

    this.load.spritesheet(
      "CollidersTileset",
      "assets/tilesets/colliders/colliders.png",
      {
        frameWidth: 8,
        frameHeight: 8,
      },
    );
  }

  create() {
    const levels = this.cache.json.get("levels.ldtk");

    const level1 = levels.levels[0];
    const layers = level1.layerInstances;
    const decorationLayer = createLDtkilemap(
      this,
      layers[2],
      "LevelTileset",
    );

    const collisionLayer = createCollisionLDtkTilemap(
      this,
      layers[1],
      "CollidersTileset",
      [0, 1],
    );

    collisionLayer?.setScale(5, 5);
    collisionLayer.setAlpha(0.5);
    decorationLayer?.setScale(5, 5);

    const hero = new Player({
      scene: this,
      x: phaserConfig.width / 2,
      y: 100,
      texture: "Hero",
    });

    this.physics.add.collider(hero, collisionLayer!);

    this.physics.world.setBounds(
      0,
      0,
      phaserConfig.width * 5,
      phaserConfig.height * 5,
    );

    this.cameras.main.startFollow(hero);
    this.cameras.main.zoom = 1;
    // map.renderDebug(this.add.graphics(), {
    //   tileColor: null, // Non-colliding tiles
    //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200), // Colliding tiles
    //   faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Colliding face edges
    // });
  }

  update(_time: number, _delta: number): void {
  }
}
