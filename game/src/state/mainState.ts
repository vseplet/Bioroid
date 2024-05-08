import { createActor, createMachine } from "xstate";

export const mainStateMachine = createMachine({
  initial: "bootstrap",

  states: {
    bootstrap: {
      on: {
        MENU: "menu",
        PLAY: "play",
      },
    },

    intro: {
      on: {
        MENU: "menu",
      },
    },

    menu: {
      on: {
        PLAY: "play",
      },
    },

    play: {
      on: {
        STOP: "stop",
        toggle: "stop",
        OVER: "over",
      },
    },

    stop: {
      on: {
        PLAY: "play",
        toggle: "play",
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
