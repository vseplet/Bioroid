import scripts from "@game/scripts";

export class SceneMenu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  create() {
    this.cameras.main.setBackgroundColor("#ff00ff"); // pink
    scripts.initSceneSwitcher(this);
  }
}
