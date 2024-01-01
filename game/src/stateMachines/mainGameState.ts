import { createActor, createMachine } from "xstate";

export const mainGameState = createMachine({
  id: "toggle",
  initial: "active",
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
  },
});

export const mainGameStateActor = createActor(mainGameState);
