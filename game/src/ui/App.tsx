/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

function App() {
  const [curState, setState] = useState(
    window.mainGameStateActor.logic.config.initial,
  );

  window.mainGameStateActor.subscribe((state) => {
    setState(state.value as string);
  });

  return (
    <>
      <button
        onClick={() => {
          window.mainGameStateActor.send({ type: "TOGGLE" });
        }}
      >
        {curState?.toString()}
      </button>
    </>
  );
}

export default App;
