import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./searchBar.js";
import CardList from "./cardList";
import Scroll from "./Scroll.js";
import ErrorBoundry from "./ErrorBoundry";

const App = () => {
  const [robot, setRobot] = useState([]);
  const [searchField, setSearchField] = useState("");

  //if we don't use  arrow function here this.state will not work because it refer to onChange event happening in searchBar file
  const onSearchInput = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>{ setRobot(json)});
      console.log(robot)
  },[]);

  const searchRobot = robot.filter((val) => {
    return val.username.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">ROBOFRIENDS</h1>
      <SearchBar searchChange={onSearchInput} />
      <Scroll>
        <ErrorBoundry>
          <CardList robot={searchRobot} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
