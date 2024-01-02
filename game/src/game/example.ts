/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { Player } from "./prototypes/Player";
import { Enemy } from "./prototypes/Enemy";
import { Turret } from "./prototypes/Turret";
import { BootstrapScene } from "./scenes/BootstrapScene";

const WIDTH = 800;
const HEIGHT = 600;

class Example extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  // preload() {
  //   this.load.image("player", "assets/sprites/clown.png");
  //   this.load.spritesheet("ball", "assets/sprites/balls.png", {
  //     frameWidth: 17,
  //     frameHeight: 17,
  //   });

  //   this.load.spritesheet("spider", "assets/sprites/spider.png", {
  //     frameWidth: 16,
  //     frameHeight: 16,
  //   });

  //   this.load.spritesheet("solder", "assets/sprites/solder.png", {
  //     frameWidth: 16,
  //     frameHeight: 16,
  //   });
  // }

  create() {
    this.scale.displaySize.setAspectRatio(WIDTH / HEIGHT);
    this.scale.refresh();

    const enemies = this.add.group();
    const players = this.add.group();
    const bullets = this.add.group();

    players.add(
      new Player({
        scene: this,
        x: WIDTH / 2,
        y: HEIGHT / 2,
        texture: "solder",
      }),
    );

    players.add(
      new Turret({
        scene: this,
        x: WIDTH / 4,
        y: 100,
        enemies,
        bullets,
      }),
    );

    setInterval(() => {
      enemies.add(
        new Enemy({
          scene: this,
          x: WIDTH / 2 + Math.random() * 800 - 400,
          y: HEIGHT / 2 + Math.random() * 800 - 400,
          texture: "spider",
          frame: 0,
        }),
      );
    }, 2000);

    this.physics.add.collider(enemies, enemies);
    this.physics.add.collider(players, players);

    this.physics.add.collider(bullets, enemies, (bullet, enemy) => {
      enemy.destroy();
      bullet.destroy();
    });
  }

  update(_time: number, _delta: number): void {
    // this.player.update();
  }
}

const config = {
  scale: {
    mode: Phaser.Scale.FIT,
    // ...
  },
  pixelArt: true,
  type: Phaser.WEBGL,
  width: WIDTH,
  height: HEIGHT,
  canvasStyle: "width: 100%",
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      // gravity: { y: 200 },
    },
  },
  scene: [BootstrapScene, Example],
};

const game = new Phaser.Game(config);

window.onload = () => {
  window.mainGameStateActor.subscribe((state) => {
    if (state.value == "active") {
      game.resume();
    }

    if (state.value == "inactive") {
      game.pause();
    }
  });
};
