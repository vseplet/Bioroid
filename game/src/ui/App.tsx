/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useEffect, useState } from "react";

import { useEffect } from "react";

function App() {
  // const [resourceLoadProgress, setResourceLoadProgress] = useState(0.0);
  // const [curState, setState] = useState(
  //   window.mainGameStateActor.logic.config.initial,
  // );

  const checkProgress = () => {
    console.log(window.resourceLoadProgress);

    if (window.resourceLoadProgress && window.resourceLoadProgress <= 1) {
      // setResourceLoadProgress(window.resourceLoadProgress * 100);
    }

    if (window.resourceLoadProgress == 1) {
      return;
    } else {
      setTimeout(checkProgress, 0);
    }
  };

  useEffect(() => {
    checkProgress();

    // window.mainGameStateActor.subscribe((state) => {
    //   // setState(state.value as string);
    // });
  }, []);

  return (
    <>
      {
        /* <div className="flex justify-center items-center w-auto h-full">
        <div className="flex flex-col w-1/3">
          <progress
            className="progress w-auto"
            value={resourceLoadProgress}
            max="100"
          >
          </progress>
          <br />
          <button
            className="btn btn-sm"
            onClick={() => {
              window.mainGameStateActor.send({ type: "TOGGLE" });
            }}
          >
            START
          </button>
          <br />
          <button
            className="btn btn-sm"
            onClick={() => {
              window.mainGameStateActor.send({ type: "TOGGLE" });
            }}
          >
            {curState?.toString()}
          </button>
        </div>
      </div>  */
      }
    </>
  );
}

export default App;
