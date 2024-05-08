import scripts from "@game/scripts";

export class SceneIntro extends Phaser.Scene {
  constructor() {
    super("Intro");
  }

  create() {
    this.cameras.main.setBackgroundColor("#00ff00"); // green
    scripts.initSceneSwitcher(this);
  }
}
