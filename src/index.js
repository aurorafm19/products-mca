import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import ProductList from "./components/product-list";
import ProductDetail from "./components/product-detail";
import Header from "../src/components/header";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <Route exact path="/" component={ProductList}></Route>
    <Route path="/product/:id" component={ProductDetail}></Route>
  </BrowserRouter>,
  document.getElementById("root")
);
