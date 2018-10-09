import React, { Component } from "react";
import './css/Button.css';

class Button extends Component {

  handleTerm = () => {
      let passTerm = this.props.keyword;
      this.props.onTermChange(passTerm);
}

  render() {
    return <div onClick={this.handleTerm} className="sidebtn btn btn-primary">{this.props.title}</div>;
  }
}

export default Button;
