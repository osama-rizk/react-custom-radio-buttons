# react-custom-radio-buttons

# Installation

```
npm install react-custom-radio-buttons --save

```

# Demo

![Alt Text](https://s5.gifyu.com/images/custom-buttons2.gif)

# Usage Example

```js
import { Radio, RadioGroup } from "react-custom-radio-buttons";

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

      <h1>Your Size is {size}</h1>
    </div>
  );
}
```

# Props

1-RadioGroup

| Prop name      | Description                                | isRequired | type     |
| -------------- | ------------------------------------------ | ---------- | -------- |
| onChange       | Give You The Value of selected Option      | Yes        | function |
| containerStyle | Styling The container of all radio buttons | No         | String   |

2-Radio

| Prop name    | Description                  | isRequired | type     |
| ------------ | ---------------------------- | ---------- | -------- |
| render       | Render Radio Button UI       | Yes        | function |
| value        | The Value Of The Option      | Yes        | Any      |
| disableStyle | Styling The Disabled Option  | No         | Object   |
| isDisabled   | Tell That Option Is Disabled | No         | Boolean  |

## Thank you
