import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./componenets/navbar";
import Counters from "./componenets/counters";
import "./App.css";
import { render } from "react-dom";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 2
      },
      {
        id: 3,
        value: 10
      },
      {
        id: 4,
        value: 3
      }
    ]
  };

  handleIncrement = counter => {
    console.log("increment counter ", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
    //counter
  };
  handleDelete = counterID => {
    console.log("Handle delete from counters", counterID);
    const counter = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: counter });
    // update the state.
  };
  handleReset = () => {
    console.log("Reset all buttons");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
