import React, { useState } from "react";
import "./App.css";
import { Radio, RadioGroup } from "../src/Components";
const options = ["xs", "s", "m", "l", "xl", "xxl", "xxxl"];
function App() {
  const [size, setSize] = useState(null);
  const onChange = option => {
    setSize(option);
  };
  return (
    <div className="App">
      <h1>Please Selct Your Size</h1>
      <RadioGroup containerStyle="options-container" onChange={onChange}>
        {options.map(option => (
          <Radio
            value={option}
            // isDisabled={option == "s"}
            // disableStyle={{ opacity: 0.2 }}
            render={({ isSelected }) => (
              <button
                className="option"
                style={{
                  backgroundColor: ` ${isSelected ? "#39ab31" : "#f9d10a"} `
                }}
              >
                {option}
              </button>
            )}
          />
        ))}
      </RadioGroup>

      <h1>Your Size is [ {size} ]</h1>
    </div>
  );
}

export default App;
