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

    const [defaultAnim, _testAnim] = this.anims.createFromAseprite("title");

    console.log(defaultAnim);

    defaultAnim.repeat = -1;
    defaultAnim.repeatDelay = 1000;

    const sprite = this.add.sprite(
      phaserConfig.width / 2,
      phaserConfig.height / 2,
      "title",
    )
      .setScale(10, 10)
      .setAngle(100)
      .play("Default");

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
