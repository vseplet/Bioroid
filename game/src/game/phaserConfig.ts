import { BootstrapScene } from "./scenes/BootstrapScene";
import { GameScene } from "./scenes/GameScene";

const WIDTH = 800;
const HEIGHT = WIDTH / (screen.width / screen.height);

export const phaserConfig = {
  scale: {
    mode: Phaser.Scale.FIT,
    count: 5,
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
      gravity: { y: 1000 },
    },
  },
  input: {
    gamepad: true,
  },
  scene: [BootstrapScene, GameScene],
};
