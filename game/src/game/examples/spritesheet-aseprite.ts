/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from "phaser";
import { BootstrapScene } from "../scenes/BootstrapScene";

const WIDTH = 800;
const HEIGHT = 600;

class Example extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.scale.displaySize.setAspectRatio(WIDTH / HEIGHT);
    this.scale.refresh();

    const [defaultAnim, _testAnim] = this.anims.createFromAseprite("Title");

    console.log(defaultAnim);

    defaultAnim.repeat = -1;
    defaultAnim.repeatDelay = 1000;

    const sprite = this.add.sprite(WIDTH / 2, HEIGHT / 2, "Title")
      .setScale(10, 10)
      .setAngle(100)
      .play("Default");

    const tweenConfig = {
      targets: sprite,
      x: sprite.x, // ending x position
      y: sprite.y - 20, // ending y position
      duration: 1000, // duration of the tween in milliseconds
      ease: "Linear", // easing function, you can use others like 'Linear', 'Quad.easeIn', etc.
      yoyo: true, // whether the tween should return to its original state
      repeat: -1, // number of times to repeat (-1 means repeat indefinitely)
    };

    // Create the tween
    const tween = this.tweens.add(tweenConfig);

    // Start the tween
    tween.play();
  }

  update(_time: number, _delta: number): void {
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
    },
  },
  scene: [BootstrapScene, Example],
};

const game = new Phaser.Game(config);

window.game = game;

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
