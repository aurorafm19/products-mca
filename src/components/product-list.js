import React, { Component } from "react";
import Searchbar from "../components/searchbar";
import ProductCard from "../components/product-card";
import "../css/product-list.css";
import { getProductlist } from "../services/products";

export default class ProductList extends Component {
  state = {
    products: []
  };

  getSearchValue(data) {
    console.log(data);
  }

  componentDidMount() {
    getProductlist()
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  }

  render() {
    const { products } = this.state;
    return (
      <div className="product-list">
        <Searchbar onChange={this.getSearchValue} />
        <div class="products-card-container">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    );
  }
}
