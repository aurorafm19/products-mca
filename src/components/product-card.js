import React, { Component } from "react";
import "../css/product-card.css";

export default class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <img
          className="product-card-image"
          src={this.props.product.imgUrl}
          alt="mobile"
        />
        <div className="product-card-content">
          <div className="product-card-title">
            {this.props.product.model}-{this.props.product.brand}
          </div>
          <div className="product-card-desc">{this.props.product.price}$</div>
        </div>
      </div>
    );
  }
}
