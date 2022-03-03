import React, { Component } from 'react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";



class InputRangee extends Component {
  constructor() {
    super();
    this.state = {
      value: { min: 100, max: 1000 }
    };
  }
  render() {
    return (
        <form>
          <InputRange
          step={150}
            maxValue={2000}
            minValue={0}
            formatLabel={value => `${value}`}
            value={this.state.value}
            onChange={value => this.setState({ value })}
          />
        </form>
    );
  }
}

export default InputRangee;
