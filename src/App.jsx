import { useState } from "react";
import "./App.css";
import ColorBox from "./ColorBox";

function App() {
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
  ];
  return (
    <>
      <ColorBox colors={colors} />
    </>
  );
}

export default App;
