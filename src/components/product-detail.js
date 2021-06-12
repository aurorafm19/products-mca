import React, { Component } from "react";
import "../css/product-detail.css";
import { getProductDetail, addProduct } from "../services/products";

import { MdAddShoppingCart } from "react-icons/md";

export default class ProductDetail extends Component {
  state = {
    details: {},
    colorSelected: "",
    storageSelected: "",
    id: this.props.match.params.id,
  };

  componentDidMount() {
    getProductDetail(this.state.id).then((data) =>
      this.setState({
        details: data,
        colorSelected: data.options.colors[0].code,
        storageSelected: data.options.storages[0].code,
      })
    );
  }

  onSelectColor = (event) => {
    console.log(event);
    this.setState({ colorSelected: event.target.value });
  };

  onSelectStorage = (event) => {
    this.setState({ storageSelected: event.target.value });
  };

  addToCart = () => {
    addProduct(
      this.state.id,
      this.state.colorSelected,
      this.state.storageSelected
    );
  };

  render() {
    const {
      imgUrl,
      options,
      brand,
      battery,
      cpu,
      primaryCamera,
      secondaryCmera,
      os,
      ram,
      displayResolution,
      dimentions,
      model,
      price,
      weight,
    } = this.state.details;
    return (
      <div className="product-detail">
        <img className="product-detail-image card" src={imgUrl} alt="mobile" />

        <div className="product-detail-content">
          <div className="product-detail-description card">
            <ul>
              <li>
                <span>Brand:</span> {brand}
              </li>
              <li>
                <span>model:</span> {model}
              </li>
              <li>
                <span>price:</span> {price} $
              </li>
              <li>
                <span>CPU: </span> {cpu}
              </li>
              <li>
                <span>RAM:</span> {ram}
              </li>
              <li>
                <span>OS: </span>
                {os}
              </li>
              <li>
                <span>screen resolution: </span>
                {displayResolution}
              </li>
              <li>
                <span>Battery: </span>
                {battery}
              </li>
              <li>
                <span>Cameras: primary-</span> {primaryCamera}{" "}
                <span>secondary-</span> {secondaryCmera}
              </li>
              <li>
                <span>Dimentions: </span>
                {dimentions}
              </li>
              <li>
                <span>weight:</span> {weight}{" "}
              </li>
            </ul>
          </div>
          <div className="product-detail-actions card">
            <div className="actions">
              <select onChange={this.onSelectColor}>
                {options?.colors?.map((color, key) => {
                  return (
                    <option key={key} value={color.code}>
                      {color.name}
                    </option>
                  );
                })}
              </select>
              <select onChange={this.onSelectStorage}>
                {options?.storages?.map((storage, key) => {
                  return (
                    <option key={key} value={storage.code}>
                      {storage.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button
              className="product-detail-add-button"
              onClick={this.addToCart}
            >
              <span>Add</span>
              <MdAddShoppingCart />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
