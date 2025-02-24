import React from "react";
import "./cards.css";

export default class Cards extends React.Component {
  render() {
    console.log("Products in Cards:", this.props.products);
    console.log("addToCart function:", this.props.addToCart);
    

    return (
      <div className="product-container">
        {this.props.products && this.props.products.length > 0 ? (
          this.props.products.map((product, index) => (
            <div key={index} className="product-box">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart" onClick={() => this.props.addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    );
  }
}