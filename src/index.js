import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import ProductList from "./components/product-list";
import Header from "../src/components/header";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <Route exact path="/" component={ProductList}></Route>
  </BrowserRouter>,
  document.getElementById("root")
);
