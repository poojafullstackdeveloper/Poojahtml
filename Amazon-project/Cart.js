import React from "react";
import "./Cart.css";

export default class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <img
          style={{ height: "60px", width: "60px", margin: "20px" }}
          src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_1280.png"
          alt="cart"
        />
      </div>
    );
  }
}