import scripts from "@game/scripts";

export class SceneOver extends Phaser.Scene {
  constructor() {
    super("Over");
  }

  create() {
    this.cameras.main.setBackgroundColor("#ffffff"); // white
    scripts.initSceneSwitcher(this);
  }
}
