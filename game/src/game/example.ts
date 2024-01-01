/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { Player } from "./prototypes/Player";
import { Enemy } from "./prototypes/Enemy";

const WIDTH = 800;
const HEIGHT = 600;

class Example extends Phaser.Scene {
  preload() {
    this.load.image("player", "assets/sprites/clown.png");
    this.load.spritesheet("ball", "assets/sprites/balls.png", {
      frameWidth: 17,
      frameHeight: 17,
    });

    this.load.spritesheet("spider", "assets/sprites/spider.png", {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet("solder", "assets/sprites/solder.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    this.scale.displaySize.setAspectRatio(WIDTH / HEIGHT);
    this.scale.refresh();

    const group = this.add.group();

    const player = new Player({
      scene: this,
      x: WIDTH / 2,
      y: HEIGHT / 2,
      texture: "solder",
    });

    setInterval(() => {
      group.add(
        new Enemy({
          scene: this,
          x: WIDTH / 2 + Math.random() * 800 - 400,
          y: HEIGHT / 2 + Math.random() * 800 - 400,
          texture: "spider",
          frame: 0,
        }),
      );
    }, 200);

    this.physics.add.collider(group, group, (_player, _enemy) => {
    });

    this.physics.add.collider(player, group, (_player, enemy) => {
      enemy.destroy();
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
  scene: Example,
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
