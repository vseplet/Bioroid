/* eslint-disable @typescript-eslint/no-unused-vars */

import { mainStateSwitcher } from "../../state/mainState";

export function initSceneSwitcher(scene: Phaser.Scene) {
  window.mainState.subscribe((state: { value: string }) => {
    if (state.value == "intro") {
      scene.scene.start("Intro");
    }

    if (state.value == "menu") {
      scene.scene.start("Menu");
    }

    if (state.value == "game") {
      scene.scene.start("Game");
      mainStateSwitcher.play();
    }

    if (state.value == "over") {
      scene.scene.start("Over");
    }
  });
}
