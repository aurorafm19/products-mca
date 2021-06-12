import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NOT_INFO_AVAILABLE } from "../constants";
import "../css/product-card.css";

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <Link to={`/product/${product.id}`} className="product-card card">
        <img className="product-card-image" src={product.imgUrl} alt="mobile" />
        <div className="product-card-content">
          {product.model && product.brand ? (
            <div className="product-card-title">
              {product.model}-{product.brand}
            </div>
          ) : (
            <div className="product-card-not-info">{NOT_INFO_AVAILABLE}</div>
          )}
          {product.price ? (
            <div className="product-card-desc">{product.price}$</div>
          ) : (
            <div className="product-card-not-info">{NOT_INFO_AVAILABLE}</div>
          )}
        </div>
      </Link>
    );
  }
}
