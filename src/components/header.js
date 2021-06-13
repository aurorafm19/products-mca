import React, { Component } from "react";
import { MdShoppingCart } from "react-icons/md";
import "../css/header.css";
import { getItemInStorage } from '../helpers/storage';
import Breadcrumbs from "./breadcrumbs";

export default class Header extends Component {
  render() {
    const count = getItemInStorage("count");
    return (
      <div>
        <header className="header">
          <a className="header-title" href="/">
            Products
          </a>
          <div className="header-count">{count}</div>
          <MdShoppingCart className="header-icon" />
        </header>
        <Breadcrumbs />
      </div>
    );
  }
}
