/* eslint-disable @typescript-eslint/ban-ts-comment */
export class TurretBullet extends Phaser.Physics.Arcade.Sprite {
  //@ts-ignore
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.world.enable(this);

    this.scene.events.on("update", this.update, this);
  }

  update() {
    // Логика обновления пули, если необходимо
  }
}
