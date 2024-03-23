import { useState } from "react";
import "./App.css";
import TicTacToe from "../components/TicTacToe";

function App() {
  return (
    <>
      <div className=" w-full h-screen flex flex-col items-center bg-blue-950 text-white">
        <TicTacToe />
      </div>
    </>
  );
}

export default App;
