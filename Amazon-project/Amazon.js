import React from "react";

import Header from "../Amazon-project/Header";
import Pannel from "../Amazon-project/Pannel";
import Data  from "../Amazon-project/Data";
import products from "../Amazon-project/"

export default class Amazon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: Product, // Changed key name to lowercase for consistency
      cartArray: [],
    };
  }

  addToCart = (data) => {
    this.setState({ cartArray: [...this.state.cartArray, data] });
  };

  render() {
    return (
      <div >
        <Header cartCount={this.state.cartArray.length} />
        <Pannel data={this.state.products} addToCart={this.addToCart} />
      </div>
    );
  }
}