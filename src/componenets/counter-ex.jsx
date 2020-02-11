import React, { Component } from "react";

class List extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };
  render() {
    let classes = this.getBadgeClasses();
    return (
      <React.Fragment>
        <span style={this.styles} className={classes}>
          {" "}
          {this.formatCount()}{" "}
        </span>{" "}
        <button className="btn btn-secondary btn-sm"> Increment</button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  //   render() {
  //     return (
  //       <div>
  //         <img src={this.state.imageUrl} alt="" />
  //         <span> {this.formatCount()} </span> <button> Increment</button>
  //       </div>
  //     );
  //   }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  formatCountJSX() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero </h1> : count;
  }
}

export default Counter;
