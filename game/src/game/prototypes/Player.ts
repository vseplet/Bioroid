/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";

export class Player extends Phaser.Physics.Arcade.Sprite {
  name: string = "player";
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(
    config: {
      scene: Phaser.Scene;
      x: number;
      y: number;
      texture: string | Phaser.Textures.Texture;
      frame?: string | number;
    },
  ) {
    super(config.scene, config.x, config.y, config.texture);
    this.name = "player";

    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);

    this.cursors = config.scene.input.keyboard!.createCursorKeys();
    this.setCollideWorldBounds(true);
  }

  preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta);

    if (this.cursors.up.isDown) {
      this.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
      this.setVelocityY(160);
    } else {
      this.setVelocityY(0);
    }

    if (this.cursors.left.isDown) {
      this.setVelocityX(-160);
      //   this.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.setVelocityX(160);
      //   this.anims.play("right", true);
    } else {
      this.setVelocityX(0);
    }

    this.setFlipX(this.body!.velocity.x <= 0);
  }
}
