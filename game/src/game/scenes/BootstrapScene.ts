import Phaser from "phaser";

export class BootstrapScene extends Phaser.Scene {
  constructor() {
    super("BootstrapScene");
  }

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

    this.load.on("progress", (value: number) => {
      console.log(`progress! ${value}`);
    });

    this.load.on("complete", () => {
      console.log("complete!");
      //   console.log(this.load);
      //   console.log(this.load.state);
      this.scene.start("GameScene");
    });
  }
}
