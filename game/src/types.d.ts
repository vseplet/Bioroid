import { mainGameStateActor } from "./stateMachines/mainGameState";
import Phaser from "phaser";
import { Peer } from "peerjs";

declare global {
  interface Window {
    resourceLoadProgress: number;
    game: Phaser.Game;
    peer: Peer;
    gamepads: Phaser.Input.Gamepad;
    mainState: typeof mainGameStateActor;
  }
}

export default global;
