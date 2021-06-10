import React, { Component } from "react";
import Searchbar from "../components/searchbar";
import ProductCard from "../components/product-card";
import "../css/product-list.css";
import { getProductlist } from "../services/products";
import {filterBySearchValue} from '../helpers/filter';

export default class ProductList extends Component {
  state = {
    products: []
  };

  getSearchValue = (data) => {
    if (data.searchValue.length === 0 ) {
        return;
    }

    const productsFiltered = filterBySearchValue(data.searchValue, this.state?.products);
    this.setState({products: productsFiltered});
  }

  componentDidMount() {
    getProductlist()
      .then((data) => this.setState({ products: data }));
  }

  render() {
    const { products } = this.state;
    return (
      <div className="product-list">
        {/* <Searchbar onChange={this.getSearchValue} /> */}
        <div className="products-card-container">
          {products?.map((product, key) => {
            return <ProductCard product={product} key={key}/>;
          })}
        </div>
      </div>
    );
  }
}
