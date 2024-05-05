import Phaser from "phaser";

export class BootstrapScene extends Phaser.Scene {
  constructor() {
    super("BootstrapScene");
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

    this.load.aseprite(
      "dino-rider",
      "assets/spritesheets/dino-rider/dino-rider.png",
      "assets/spritesheets/dino-rider/dino-rider.json",
    );

    this.load.aseprite(
      "dino-king",
      "assets/spritesheets/dino-king/dino-king.png",
      "assets/spritesheets/dino-king/dino-king.json",
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
    {
      const [defaultAnim] = this.anims.createFromAseprite("title");
      defaultAnim.repeat = -1;
      defaultAnim.repeatDelay = 1000;
    }

    {
      const [defaultAnim] = this.anims.createFromAseprite("hero");
      defaultAnim.repeat = -1;
    }

    {
      const [defaultAnim] = this.anims.createFromAseprite("dino");
      defaultAnim.repeat = -1;
    }

    {
      const [run, angry] = this.anims.createFromAseprite("chicken");
      run.repeat = -1;
      angry.repeat = -1;
    }

    {
      const [defaultAnim] = this.anims.createFromAseprite("dino-rider");
      defaultAnim.repeat = -1;
    }

    {
      const [green, red] = this.anims.createFromAseprite("dino-king");
      green.repeat = -1;
      red.repeat = -1;
    }
  }
}
