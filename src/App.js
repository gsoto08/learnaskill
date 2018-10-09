import React, { Component } from "react";
import Youtube from "./components/Youtube";
import "./App.css";
import Button from "./components/Button";

class App extends Component {
  state = {
    term: []  
  }
  handleTermChange = (passTerm) => {
    this.setState({term: passTerm});
    console.log("finished term",this.state.term)
}
  render() {
    return (
      <div className="App">
        <div className="container">
        <h1 className="title">Learn to {`<Build/>`}</h1>
          <hr/>
          <div className="row">
            <div className="col-md-10">
              <Youtube term={this.state.term}/>
            </div>
            <div className="col-md-2 col-sm-12 btnholder">
            <Button title="Learn React" onTermChange={this.handleTermChange} keyword="React js"/>
            <Button title="Learn Vue" onTermChange={this.handleTermChange} keyword="Vue Js"/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
