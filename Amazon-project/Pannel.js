import React from "react";
import "./Pannel.css"; // Ensure the CSS file is named correctly
import Cards from "./cards"; // Ensure the file is named cards.js (lowercase)

export default class Pannel extends React.Component {
  render() {
    return (
      <div className="pannel">
        <Cards products={this.props.data} addToCart={this.props.addToCart} />
      </div>
    );
  }
}