import configs from "./configs/mod";

const game = new Phaser.Game(configs.defaultConfig);
window.game = game;

// window.addEventListener("resize", function (event) {
//   const WIDTH = 800;
//   const HEIGHT = WIDTH /
//     (document.documentElement.clientWidth /
//       document.documentElement.clientHeight);

//   game.scale.resize(WIDTH, HEIGHT);
//   game.canvas.width = WIDTH;
//   game.canvas.width = HEIGHT;
// }, false);

window.onload = () => {
  window.mainState.subscribe((state: { value: string }) => {
    console.log(state.value);
    if (state.value == "play") {
      game.resume();
    }

    if (state.value == "stop") {
      game.pause();
    }
  });
};
