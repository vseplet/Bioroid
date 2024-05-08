import Phaser from "phaser";
import scripts from "@game/scripts";
import { mainStateSwitcher } from "../../state/mainState";

export class SceneBootstrap extends Phaser.Scene {
  constructor() {
    super("Bootstrap");
  }

  preload() {
    scripts.preloadAssets(this);

    this.load.on("progress", (value: number) => {
      window.resourceLoadProgress = value;
    });

    scripts.initSceneSwitcher(this);
    this.load.on("complete", () => {
      mainStateSwitcher.intro();
    });
  }

  create() {
    this.cameras.main.setBackgroundColor("#ffff00"); // yellow
    scripts.createAnimations(this);
  }
}
