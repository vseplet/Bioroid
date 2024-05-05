/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { phaserConfig } from "../phaserConfig";

export class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.scale.displaySize.setAspectRatio(
      phaserConfig.width / phaserConfig.height,
    );
    this.scale.refresh();

    const sprite = this.add.sprite(
      phaserConfig.width / 2,
      phaserConfig.height / 2,
      "title",
    )
      .setScale(10, 10)
      .play("Default");

    this.add.sprite(
      50,
      50,
      "hero",
    ).setScale(10, 10)
      .play("Hero-Run");

    this.add.sprite(
      150,
      50,
      "dino",
    ).setScale(10, 10)
      .play("Dino-Run");

    this.add.sprite(
      250,
      50,
      "chicken",
    ).setScale(10, 10)
      .play("Chicken-Run");

    this.add.sprite(
      350,
      50,
      "chicken",
    ).setScale(10, 10)
      .play("Chicken-Run-Angry");

    this.add.sprite(
      50,
      200,
      "dino-rider",
    ).setScale(10, 10)
      .play("DinoRider-Run");

    this.add.sprite(
      50,
      350,
      "dino-king",
    ).setScale(10, 10)
      .play("DinoKing-Run-Green");

    this.add.sprite(
      50,
      500,
      "dino-king",
    ).setScale(10, 10)
      .play("DinoKing-Run-Red");

    const tweenConfig = {
      targets: sprite,
      x: sprite.x, // ending x position
      y: sprite.y - 20, // ending y position
      duration: 1000, // duration of the tween in milliseconds
      ease: "Linear", // easing function, you can use others like 'Linear', 'Quad.easeIn', etc.
      yoyo: true, // whether the tween should return to its original state
      repeat: -1, // number of times to repeat (-1 means repeat indefinitely)
    };

    // Create the tween
    const tween = this.tweens.add(tweenConfig);

    // Start the tween
    tween.play();
  }

  update(_time: number, _delta: number): void {
  }
}
