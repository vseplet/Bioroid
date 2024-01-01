import { mainGameStateActor } from "./stateMachines/mainGameState";

declare global {
  interface Window {
    mainGameStateActor: typeof mainGameStateActor;
  }
}

export default global;
