import { mainGameStateActor } from "./state/mainGameState";

declare global {
  interface Window {
    mainGameStateActor: typeof mainGameStateActor;
  }
}

export default global;
