/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { defaultConfig } from "../configs/defaultConfig";

export class GameScene extends Phaser.Scene {
  private title: Phaser.GameObjects.Sprite | undefined;

  constructor() {
    super("GameScene");
  }

  create() {
    this.scale.displaySize.setAspectRatio(
      defaultConfig.width / defaultConfig.height,
    );
    this.scale.refresh();

    this.title = this.add.sprite(
      defaultConfig.width / 2,
      defaultConfig.height / 2,
      "Title",
    )
      .setScale(8, 8)
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
      450,
      50,
      "egg",
    ).setScale(10, 10)
      .play("Egg-Idle");

    this.add.sprite(
      550,
      50,
      "slime",
    ).setScale(10, 10)
      .play("Slime-Jump-Big-Green");

    this.add.sprite(
      650,
      50,
      "slime",
    ).setScale(10, 10)
      .play("Slime-Jump-Small-Green");

    this.add.sprite(
      750,
      50,
      "slime",
    ).setScale(10, 10)
      .play("Slime-Jump-Big-Red");

    this.add.sprite(
      750,
      150,
      "slime",
    ).setScale(10, 10)
      .play("Slime-Jump-Small-Red");

    this.add.sprite(
      750,
      250,
      "slime",
    ).setScale(10, 10)
      .play("Slime-Jump-Big-Orange");

    this.add.sprite(
      750,
      350,
      "slime",
    ).setScale(10, 10)
      .play("Slime-Jump-Small-Orange");

    this.add.sprite(
      750,
      500,
      "rider",
    ).setScale(10, 10);

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
      targets: this.title,
      x: this.title.x, // ending x position
      y: this.title.y - 20, // ending y position
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
    this.title?.setAngle(_time * 0.01);
  }
}
