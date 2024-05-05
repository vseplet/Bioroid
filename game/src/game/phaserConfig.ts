import { BootstrapScene } from "./scenes/BootstrapScene";
import { GameScene } from "./scenes/GameScene";

const WIDTH = 800;
const HEIGHT = 600;

export const phaserConfig = {
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
  scene: [BootstrapScene, GameScene],
};
