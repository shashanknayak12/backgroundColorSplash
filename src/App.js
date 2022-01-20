import { useEffect, useState } from "react";
import Button from "./Button";

import "./App.css";

const options = ["red", "green", "blue", "orange", "grey", "orchid", "peru"];
var colorInterval;
export default function App() {
  const [selectedColor, setSelectedColor] = useState("");
  let [isColorDisable, setColorDisable] = useState(false);

  useEffect(() => {
    if (isColorDisable) {
      let i = 0;
      colorInterval = setInterval(() => {
        setSelectedColor(options[i++]);
        if (i === options.length) {
          i = 0;
        }
      }, 100);
    }
    if (!isColorDisable) {
      clearInterval(colorInterval);
    }
  }, [isColorDisable]);

  return (
    <div className={`App ${selectedColor}`}>
      <Button
        btnName={isColorDisable ? "Stop" : "Start"}
        onChange={() => {
          setColorDisable(!isColorDisable);
        }}
      />
    </div>
  );
}


