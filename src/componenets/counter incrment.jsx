import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 2,
    newcount: 1,
    isClicked: false
  };

  //   constructor() {
  //     super();
  //     //this.handleIncrement.bind(this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     console.log(this);
  //   }
  render() {
    return (
      <div>
        {/* <span>{this.state.newcount}</span> */}
        <span>{this.formatInfo()}</span>
        <span> {this.state.count}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    console.log("Increment Clicked", this);
    this.toggleinfo();
    this.setState({ count: this.state.count + 1 });
    //this.setState({ info: this.state.newcount + 1 });
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  formatInfo() {
    const { isClicked } = this.state;
    if (isClicked) {
      return "true";
    }
    return "false";
  }

  toggleinfo = () => {
    console.log("toggle");
    this.setState({ isClicked: !this.state.isClicked });
  };
}

export default Counter;
