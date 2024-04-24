import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css";

export default function ColorBoxGrid({ colors }) {
  // Make empty boxes array
  const boxes = [];
  // Loop 16 times and
  for (let i = 0; i < 16; i++) {
    // Push one ColorBox component with a random color to the array each time
    boxes.push(<ColorBox colors={colors} />);
  }
  // Return the array of boxes
  return <div className="ColorBoxGrid">{boxes}</div>;
}
