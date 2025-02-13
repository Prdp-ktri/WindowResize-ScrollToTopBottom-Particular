import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseWindowResize from "./components/use-window-resize/index";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/use-window-resize/Scroll-Top-Bottom";
import ScrollToSection from "./components/scroll-to-particular-section/scroll-to-section";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <UseWindowResizeTest /> */}
      {/* <ScrollToTopAndBottom /> */}
      <ScrollToSection />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
