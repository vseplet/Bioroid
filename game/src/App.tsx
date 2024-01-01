import { useEffect } from "react";
import "./App.css";
import { initExampleGame } from "./game/example";

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    initExampleGame();
  }, []);

  return (
    <>
      <div id="game-container" className="border-2 border-primary"></div>
    </>
  );
}

export default App;
