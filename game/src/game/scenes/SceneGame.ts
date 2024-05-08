/* eslint-disable @typescript-eslint/no-unused-vars */
import { defaultConfig } from "../configs/defaultConfig";
import { Player } from "../objects/Player";
import { PrefabSceneLevel } from "../prefabs/scenes/PrefabSceneLevel";
import resources from "@game/resources";

export class SceneGame extends PrefabSceneLevel {
  constructor() {
    super("Game", "levels", 0);
  }

  preload() {
    window.mainState.send({ type: "PLAY" });
  }

  create() {
    this.createMap(resources.assets.tilesets.level, defaultConfig.scale.count);

    const hero = new Player({
      scene: this,
      x: defaultConfig.width / 2,
      y: 100,
      texture: "hero",
    });

    this.physics.add.collider(hero, this.collisionLayer!);

    this.physics.world.setBounds(
      0,
      0,
      defaultConfig.width * 5,
      defaultConfig.height * 5,
    );

    this.cameras.main.startFollow(hero);
    this.cameras.main.zoom = 1;
  }

  update(_time: number, _delta: number): void {
  }
}
