import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 2
  };

  constructor() {
    super();
    //this.handleIncrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    console.log(this);
  }
  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  handleIncrement() {
    console.log("increment clicked", this);
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
