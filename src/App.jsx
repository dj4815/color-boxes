import { useState } from "react";
import "./App.css";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

function App() {
  // Make an array of colors for the randomColor function
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
      {/* Render the grid of randomly colored boxes */}
      <ColorBoxGrid colors={colors} />
    </>
  );
}

export default App;
