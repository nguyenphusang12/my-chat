import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "views/Chat";
import "./App.css";

function App() {
  useEffect(() => {
    const rootElement = document.documentElement;
    const setHeightApp = () => {
      rootElement.style.setProperty(
        "--height-app",
        `${rootElement.clientHeight}px`
      );
    };
    setHeightApp();
    rootElement.addEventListener("resize", setHeightApp);
    return () => rootElement.removeEventListener("resize", setHeightApp);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </div>
  );
}
export default App;
