import React, { Component } from "react";
import Searchbar from "../components/searchbar";
import ProductCard from "../components/product-card";
import "../css/product-list.css";
import { getProductlist } from "../services/products";
import { filterBySearchValue } from "../helpers/filter";
import { setItemInStorage, getItemInStorage } from "../helpers/storage";
import { HOUR_EXPIRATION, NOT_SEARCH_INFO } from "../constants";
import {MdSentimentDissatisfied} from 'react-icons/md';

export default class ProductList extends Component {
  state = {
    products: [],
    searchValue: "",
  };

  oneHur = 3600000;

  getSearchValue = (data) => {
    if (!data.searchValue) {
      this.setState({ searchValue: data.searchValue }, () => {
        this.getStorageItem();
      });
      return;
    }

    this.setState({ searchValue: data.searchValue }, () => {
      this.filterProducts();
    });
  };

  filterProducts() {
    const productsFiltered = filterBySearchValue(
      this.state.searchValue,
      this.state?.products
    );

    this.setState({ products: productsFiltered });
  }

  getStorageItem() {
    const productsInStorage = getItemInStorage("products");
    if (!productsInStorage) {
      this.getProducts();
      return;
    }

    this.setState({ products: productsInStorage });
  }

  getProducts() {
    getProductlist().then((response) => {
      this.setState({ products: response.data });
      setItemInStorage("products", response.data, HOUR_EXPIRATION);
    })
    .catch(() => {
      this.setState({products: []});
    });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { products } = this.state;
    return (
      <div className="product-list">
        <Searchbar onChange={this.getSearchValue} />
        {products.length ? (
          <div className="products-card-container">
            {products.map((product, key) => {
              return <ProductCard product={product} key={key} />;
            })}
          </div>
        ) : (
          <div className="products-card-container not-found-products">
            <MdSentimentDissatisfied className="not-found-icon"/>{NOT_SEARCH_INFO}</div>
        )}
      </div>
    );
  }
}
