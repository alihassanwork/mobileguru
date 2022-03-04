import React, { Component } from "react";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class InputRangee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: props.minValue, max: props.maxValue },
    };
  }

  render() {
    return (
      <form>
        <InputRange
          step={this.props.step}
          maxValue={this.props.maxValue}
          minValue={this.props.minValue}
          formatLabel={(value) => `${value}`}
          value={this.state.value}
          onChange={(value) => {
            console.log(value, "child component");
          }}
        />
      </form>
    );
  }
}

export default InputRangee;
