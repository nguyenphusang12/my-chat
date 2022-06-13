import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "views/Chat";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </div>
  );
}
export default App;
