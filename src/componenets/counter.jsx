import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     //this.handleIncrement.bind(this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     console.log(this);
  //   }
  render() {
    console.log("props", this.props);
    return (
      <div>
        {/* <span>{this.state.newcount}</span> */}
        <span></span>
        <span> {this.props.counter.value}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          {" "}
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
