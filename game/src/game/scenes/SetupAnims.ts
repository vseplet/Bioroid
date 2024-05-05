import Phaser from "phaser";

export class SetupAnims extends Phaser.Scene {
  constructor() {
    super("SetupAnims");
  }

  preload() {
    this.load.image("player", "assets/sprites/clown.png");

    this.load.aseprite(
      "title",
      "assets/spritesheets/title/title.png",
      "assets/spritesheets/title/title.json",
    );

    this.load.aseprite(
      "hero",
      "assets/spritesheets/hero/hero.png",
      "assets/spritesheets/hero/hero.json",
    );

    this.load.aseprite(
      "dino",
      "assets/spritesheets/dino/dino.png",
      "assets/spritesheets/dino/dino.json",
    );

    this.load.aseprite(
      "chicken",
      "assets/spritesheets/chicken/chicken.png",
      "assets/spritesheets/chicken/chicken.json",
    );

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
      window.resourceLoadProgress = value;
    });

    this.load.on("complete", () => {
      this.scene.start("GameScene");
    });
  }

  create() {
  }
}
