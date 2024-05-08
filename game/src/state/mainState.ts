import { createActor, createMachine } from "xstate";

export const mainStateMachine = createMachine({
  initial: "bootstrap",

  states: {
    bootstrap: {
      on: {
        MENU: "menu",
        INTRO: "intro",
      },
    },

    intro: {
      on: {
        MENU: "menu",
      },
    },

    menu: {
      on: {
        GAME: "game",
      },
    },

    game: {
      on: {
        PLAY: "play",
      },
    },

    play: {
      on: {
        STOP: "stop",
        OVER: "over",
      },
    },

    stop: {
      on: {
        PLAY: "play",
        MENU: "menu",
      },
    },

    over: {
      on: {
        MENU: "menu",
        INTRO: "intro",
      },
    },
  },
});

export const mainState = createActor(mainStateMachine);

export const mainStateSwitcher = {
  intro() {
    mainState.send({ type: "INTRO" });
  },

  menu() {
    mainState.send({ type: "MENU" });
  },

  game() {
    mainState.send({ type: "GAME" });
  },

  play() {
    mainState.send({ type: "PLAY" });
  },

  stop() {
    mainState.send({ type: "STOP" });
  },

  over() {
    mainState.send({ type: "OVER" });
  },
};
