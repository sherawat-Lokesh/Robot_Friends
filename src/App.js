import React, { Component } from "react";
import "./App.css";
import SearchBar from "./searchBar.js";
import CardList from "./cardList";
import Scroll from "./Scroll.js";
import ErrorBoundry from "./ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: [],
      searchField: "",
    };
  }
  //if we don't use  arrow function here this.state will not work because it refer to onChange event happening in searchBar file

  onSearchInput = (event) => {
    this.setState({ searchField: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ robot: json }, console.log(json)));
  }

  render() {
    const searchRobot = this.state.robot.filter((val) => {
      return val.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">ROBOFRIENDS</h1>
        <SearchBar searchChange={this.onSearchInput} />
        <Scroll>
          <ErrorBoundry>
            <CardList robot={searchRobot} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
