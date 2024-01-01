import Phaser from "phaser";

const WIDTH = 800;
const HEIGHT = 600;

class Example extends Phaser.Scene {
  preload() {
    this.load.image("monitor", "assets/demoscene/monitor.png");
    this.load.image("clown", "assets/sprites/clown.png");
    this.load.image("sky", "assets/skies/space2.png");
    this.load.spritesheet("ball", "assets/sprites/balls.png", {
      frameWidth: 17,
      frameHeight: 17,
    });
  }

  create() {
    this.scale.displaySize.setAspectRatio(WIDTH / HEIGHT);
    this.scale.refresh();

    this.add.image(400, 300, "sky");

    // Balls in the default world bounds

    const balls = this.physics.add.group({
      key: "ball",
      frame: [0, 1, 2, 3, 4],
      frameQuantity: 10,
      bounceX: 1,
      bounceY: 1,
      collideWorldBounds: true,
      velocityX: 100,
      velocityY: 100,
    });

    Phaser.Actions.RandomRectangle(
      balls.getChildren(),
      this.physics.world.bounds,
    );

    this.add.image(400, 300, "monitor");

    // Clown in smaller bounds

    const clown = this.physics.add.image(400, 300, "clown")
      .setCollideWorldBounds(true, 1, 1)
      .setVelocity(100, -100);

    clown.body.setBoundsRectangle(
      new Phaser.Geom.Rectangle(254, 186, 292, 210),
    );
  }
}

const config = {
  scale: {
    mode: Phaser.Scale.FIT,
    // ...
  },
  type: Phaser.WEBGL,
  width: WIDTH,
  height: HEIGHT,
  canvasStyle: "width: 100%",
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 200 },
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
