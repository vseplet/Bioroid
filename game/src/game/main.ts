import { phaserConfig } from "./phaserConfig";

const game = new Phaser.Game(phaserConfig);

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
