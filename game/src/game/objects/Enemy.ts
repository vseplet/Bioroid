/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { Player } from "./Player";

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  private player!: Player;

  constructor(
    config: {
      scene: Phaser.Scene;
      x: number;
      y: number;
      texture: string | Phaser.Textures.Texture;
      frame?: string | number;
    },
  ) {
    super(config.scene, config.x, config.y, config.texture, config?.frame);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.setBounce(0.5);
    this.setCollideWorldBounds(true);

    this.player = config.scene.children.getByName("player") as Player;
  }

  preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta);

    const directionVector = new Phaser.Math.Vector2(
      this.player.x - this.x,
      this.player.y - this.y,
    );

    directionVector.normalize();

    const speed = 50;
    this.setVelocity(directionVector.x * speed, directionVector.y * speed);

    this.setFlipX(this.body!.velocity.x < 0);
  }
}
