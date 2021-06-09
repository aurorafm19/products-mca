import React, { Component } from "react";
import { MdShoppingCart } from "react-icons/md";
import "../css/header.css";
import Breadcrumbs from './breadcrumbs';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <a className="header-title" href="/">
            Products
          </a>
          <MdShoppingCart className="header-icon" />
        </header>
          <Breadcrumbs />
      </div>
    );
  }
}
