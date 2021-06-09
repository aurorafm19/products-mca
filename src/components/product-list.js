import React,{ Component } from 'react';
import Searchbar from '../components/searchbar';
import '../css/product-list.css';

export default class ProductList extends Component {
    getSearchValue(data) {
        console.log(data)
    }

    render() {
      return (
        <div className="product-list">
            <Searchbar onChange={this.getSearchValue}/>
          <h1>Product list</h1>
        </div>
      );
    }
  }