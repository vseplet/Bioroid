import { SceneAct1Level1 } from "../scenes/Act1/SceneAct1Level1";
import { SceneAct1Level2 } from "../scenes/Act1/SceneAct1Level2";
import { SceneAct1Level3 } from "../scenes/Act1/SceneAct1Level3";
import { SceneBootstrap } from "../scenes/SceneBootstrap";
import { SceneGame } from "../scenes/SceneGame";

const WIDTH = 800;
const HEIGHT = WIDTH /
  (document.documentElement.clientWidth /
    document.documentElement.clientHeight);

export const defaultConfig = {
  scale: {
    mode: Phaser.Scale.FIT,
    count: 4,
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
  scene: [
    SceneBootstrap,
    SceneGame,
    SceneAct1Level1,
    SceneAct1Level2,
    SceneAct1Level3,
  ],
};
