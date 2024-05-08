/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { mainStateSwitcher } from "../state/mainState";

function App() {
  const [, setResourceLoadProgress] = useState(0.0);
  const [curState, setState] = useState(
    window.mainState.logic.config.initial,
  );

  const checkProgress = () => {
    if (window.resourceLoadProgress && window.resourceLoadProgress <= 1) {
      setResourceLoadProgress(window.resourceLoadProgress * 100);
    }

    if (window.resourceLoadProgress == 1) {
      return;
    } else {
      setTimeout(checkProgress, 0);
    }
  };

  useEffect(() => {
    checkProgress();

    window.mainState.subscribe((state: { value: string }) => {
      setState(state.value as string);
    });
  }, []);

  return (
    <>
      <div className="flex justify-center items-end w-auto h-full p-3">
        {
          /* <div className="flex flex-col w-1/3">
          <div className="h-1">
            <progress
              className="progress w-auto"
              value={resourceLoadProgress}
              max="100"
            >
            </progress>
          </div>
        </div> */
        }

        <div className="w-auto flex justify-center flex-row">
          <p className="badge badge-primary mr-2">
            STATE: "{curState?.toString()}"
          </p>

          <button
            className="btn btn-xs mr-2"
            onClick={() => {
              mainStateSwitcher.intro();
            }}
          >
            intro
          </button>

          <button
            className="btn btn-xs mr-2"
            onClick={() => {
              mainStateSwitcher.menu();
            }}
          >
            menu
          </button>

          <button
            className="btn btn-xs mr-2"
            onClick={() => {
              mainStateSwitcher.game();
            }}
          >
            game
          </button>

          <button
            className="btn btn-xs mr-2"
            onClick={() => {
              mainStateSwitcher.play();
            }}
          >
            play
          </button>

          <button
            className="btn btn-xs mr-2"
            onClick={() => {
              mainStateSwitcher.stop();
            }}
          >
            stop
          </button>

          <button
            className="btn btn-xs mr-2"
            onClick={() => {
              mainStateSwitcher.over();
            }}
          >
            over
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
