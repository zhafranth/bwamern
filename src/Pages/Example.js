import React, { Component } from "react";
import { InputDate, InputNumber } from "elements/Form";

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
