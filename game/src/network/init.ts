import { Peer } from "peerjs";

const peer = new Peer();
window.peer = peer;

peer.on("open", () => {
  console.log(`peerjs connection open! ${peer.id}`);
});

peer.on("error", (error) => {
  console.log(`peerjs connection error! ${error}`);
});
