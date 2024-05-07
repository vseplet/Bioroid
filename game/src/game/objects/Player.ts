/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { phaserConfig } from "../phaserConfig";

export class Player extends Phaser.Physics.Arcade.Sprite {
  name: string = "player";

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  pad: Phaser.Input.Gamepad.Gamepad | undefined;

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

    this.setScale(phaserConfig.scale.count, phaserConfig.scale.count);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);

    this.cursors = config.scene.input.keyboard!.createCursorKeys();

    config.scene.input.gamepad?.addListener(
      "connected",
      (pad: Phaser.Input.Gamepad.Gamepad) => {
        this.pad = pad;
      },
    );
  }

  getAxisX() {
    return this.pad?.axes[0].value || 0;
  }

  getAxisY() {
    return this.pad?.axes[1].value || 0;
  }

  preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta);

    if (
      (this.getAxisY() < -0.1 || this.cursors.up.isDown) &&
      this.body?.blocked.down
    ) {
      this.setVelocityY(-700);
      this.anims.play("Hero-Idle", true);
    }

    if (this.cursors.left.isDown || this.getAxisX() < -0.1) {
      this.setVelocityX(-260);
      if (this.body?.blocked.down) {
        this.anims.play("Hero-Run", true);
      } else {
        this.anims.play("Hero-Idle", true);
      }
    } else if (this.cursors.right.isDown || this.getAxisX() > 0.1) {
      this.setVelocityX(260);
      if (this.body?.blocked.down) {
        this.anims.play("Hero-Run", true);
      } else {
        this.anims.play("Hero-Idle", true);
      }
    } else {
      this.anims.play("Hero-Idle", true);
      this.setVelocityX(0);
    }

    if (this.body!.velocity.x != 0) {
      this.setFlipX(this.body!.velocity.x < 0);
    }

    if (this.body!.blocked.down == false) {
      const direction = this.flipX ? -1 : 1;
      this.setRotation(time * 0.02 * direction);
    } else {
      this.setRotation(0);
    }
  }
}
