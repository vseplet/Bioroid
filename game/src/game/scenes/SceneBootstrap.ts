import Phaser from "phaser";
import scripts from "@game/scripts";

export class SceneBootstrap extends Phaser.Scene {
  constructor() {
    super("Bootstrap");
  }

  preload() {
    scripts.preloadAssets(this);

    this.load.on("progress", (value: number) => {
      window.resourceLoadProgress = value;
    });

    this.load.on("complete", () => {
      this.scene.start("Game");
    });
  }

  create() {
    scripts.createAnimations(this);
  }
}
