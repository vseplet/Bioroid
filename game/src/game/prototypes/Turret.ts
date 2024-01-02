/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { TurretBullet } from "./Bullet";

export class Turret extends Phaser.GameObjects.Container {
  private head!: Phaser.GameObjects.Sprite;
  private platform!: Phaser.GameObjects.Sprite;
  private enemies!: Phaser.GameObjects.Group;
  private bullets!: Phaser.GameObjects.Group;

  private bulletSpeed: number = 400;
  private lastShotTime: number = 0;

  constructor(
    config: {
      scene: Phaser.Scene;
      x: number;
      y: number;
      enemies: Phaser.GameObjects.Group;
      bullets: Phaser.GameObjects.Group;
    },
  ) {
    super(config.scene, config.x, config.y);
    this.enemies = config.enemies;
    this.bullets = config.bullets;

    this.head = new Phaser.GameObjects.Sprite(
      config.scene,
      0,
      -8,
      "ball",
      1,
    );

    this.platform = new Phaser.GameObjects.Sprite(
      config.scene,
      0,
      8,
      "ball",
      0,
    );
    this.setSize(17, 34);

    this.add([this.platform, this.head]);
    config.scene.add.existing(this);

    config.scene.physics.world.enable(this);

    //@ts-ignore
    this.body.immovable = true;
  }

  preUpdate(): void {
    // Находим ближайшего врага
    const closestEnemy = this.findClosestEnemy();

    if (closestEnemy) {
      // Вычисляем угол поворота к ближайшему врагу
      const angleToEnemy = Phaser.Math.Angle.Between(
        this.x,
        this.y,
        closestEnemy.x,
        closestEnemy.y,
      );

      // Устанавливаем угол поворота башни
      this.head.rotation = angleToEnemy;

      // Проверяем, прошло ли достаточно времени с предыдущего выстрела
      const currentTime = this.scene.time.now;
      const timeSinceLastShot = currentTime - this.lastShotTime;
      const shootInterval = 1000; // Интервал выстрела в миллисекундах

      if (timeSinceLastShot > shootInterval) {
        // Стреляем врага
        this.shootBullet(angleToEnemy);

        // Обновляем время последнего выстрела
        this.lastShotTime = currentTime;
      }
    }

    // Другая логика турели, если необходимо
  }

  private shootBullet(angle: number): void {
    const bullet = new TurretBullet(
      this.scene,
      this.x,
      this.y,
      "ball",
    );

    this.bullets.add(bullet);

    // Задаем скорость пули в направлении врага
    this.scene.physics.velocityFromAngle(
      angle * Phaser.Math.RAD_TO_DEG,
      this.bulletSpeed,
      //@ts-ignore
      bullet.body.velocity,
    );
  }

  private findClosestEnemy(): Phaser.GameObjects.Sprite | null {
    let closestEnemy: Phaser.GameObjects.Sprite | null = null;
    let closestDistance = Number.MAX_VALUE;

    //@ts-ignore
    this.enemies.getChildren().forEach((enemy: Phaser.GameObjects.Sprite) => {
      const distance = Phaser.Math.Distance.Between(
        this.x,
        this.y,
        enemy.x,
        enemy.y,
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestEnemy = enemy;
      }
    });

    return closestEnemy;
  }
}
