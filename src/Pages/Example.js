import React, { Component } from "react";
import Breadcrumb from "elements/Breadcrumb";
// import { InputDate, InputNumber } from "elements/Form";

export default class Example extends Component {
  // state = {
  //   value: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // };

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  render() {
    const breadcrumb = [
      { pageTitle: "home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumb}></Breadcrumb>
          </div>
        </div>
      </div>
    );
  }
}
