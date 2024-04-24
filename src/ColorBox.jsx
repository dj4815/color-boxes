import { useState } from "react";
import "./ColorBox.css";

// Make general randomizer array function
function randomChoice(arr) {
  //   Make random index variable
  const idx = Math.floor(Math.random() * arr.length);
  // Return value at random index idx of arr
  return arr[idx];
}

// Expect colors prop from parent
export default function ColorBox({ colors }) {
  // Set start useState to randomChoice color of colors
  const [color, setColor] = useState(randomChoice(colors));
  const changeColor = () => {
    //   Make variable for result of random choice color of colors array function call
    const randomColor = randomChoice(colors);
    //   Set color to randomChoice color of colors
    setColor(randomColor);
  };
  return (
    <div
      className="ColorBox"
      //   Make default background color the useState color
      style={{ backgroundColor: color }}
      onClick={changeColor}
    ></div>
  );
}
