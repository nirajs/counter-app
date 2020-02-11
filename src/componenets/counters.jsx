import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary">
          {" "}
          Reset{" "}
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            <h4>Title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
