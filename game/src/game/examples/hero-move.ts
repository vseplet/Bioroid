/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { defaultConfig } from "../configs/defaultConfig";
import { Player } from "../objects/Player";

export class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.physics.world.setBounds(
      0,
      0,
      defaultConfig.width,
      defaultConfig.height,
    );

    this.scale.displaySize.setAspectRatio(
      defaultConfig.width / defaultConfig.height,
    );
    this.scale.refresh();

    const hero = new Player({
      scene: this,
      x: defaultConfig.width / 2,
      y: defaultConfig.height / 2,
      texture: "hero",
    });

    const rect = this.add.rectangle(
      defaultConfig.width / 2,
      defaultConfig.height - 10,
      defaultConfig.width,
      20,
      0xffffff,
    );
    this.physics.add.existing(rect, true);
    this.physics.add.collider(hero, rect);

    this.input.gamepad?.addListener("connected", () => {
      console.log("gamepad connected");
    });
  }

  update(_time: number, _delta: number): void {
  }
}
