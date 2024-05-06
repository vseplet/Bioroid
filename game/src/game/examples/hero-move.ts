/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { phaserConfig } from "../phaserConfig";
import { Player } from "../objects/Player";

export class HeroMove extends Phaser.Scene {
  constructor() {
    super("HeroMove");
  }

  create() {
    this.physics.world.setBounds(
      0,
      0,
      phaserConfig.width,
      phaserConfig.height,
    );

    this.scale.displaySize.setAspectRatio(
      phaserConfig.width / phaserConfig.height,
    );
    this.scale.refresh();

    const hero = new Player({
      scene: this,
      x: phaserConfig.width / 2,
      y: phaserConfig.height / 2,
      texture: "hero",
    });

    const rect = this.add.rectangle(
      phaserConfig.width / 2,
      phaserConfig.height - 10,
      phaserConfig.width,
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
