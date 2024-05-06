import { createActor, createMachine } from "xstate";

export const mainGameState = createMachine({
  id: "toggle",
  initial: "bootstrap",
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },

    bootstrap: {
      on: { TOGGLE: "bootstrap" },
    },
    menu: {
      on: { TOGGLE: "menu" },
    },
    play: {
      on: { TOGGLE: "play" },
    },
    stop: {
      on: { TOGGLE: "stop" },
    },
    dead: {
      on: { TOGGLE: "dead" },
    },
  },
});

export const mainGameStateActor = createActor(mainGameState);
