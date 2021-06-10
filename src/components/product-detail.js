import React, { Component } from "react";
import "../css/product-detail.css";
import { getProductDetail } from "../services/products";

import {MdAddShoppingCart } from "react-icons/md";

export default class ProductDetail extends Component {
  state = {
    details: {},
    description: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getProductDetail(id).then((data) => this.setState({ details: data }));
  }

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
      weight
    } = this.state.details;
    return (
      <div className="product-detail">
        <img className="product-card-image card" src={imgUrl} alt="mobile" />

        <div className="product-detail-content">
          <div className="product-detail-description card">
            <ul>
              <li><span>Brand:</span> {brand}</li>
              <li><span>model:</span> {model}</li>
              <li><span>price:</span> {price} $</li>
              <li><span>CPU: </span> {cpu}</li>
              <li><span>RAM:</span> {ram}</li>
              <li><span>OS: </span>{os}</li>
              <li><span>screen resolution: </span>{displayResolution}</li>
              <li><span>Battery: </span>{battery}</li>
              <li>
              <span>Cameras: primary-</span> {primaryCamera} <span>secondary-</span> {secondaryCmera}
              </li>
              <li><span>Dimentions: </span>{dimentions}</li>
              <li><span>weight:</span> {weight} </li>
            </ul>
          </div>
          <div className="product-detail-actions card">
            <select>
              {options?.colors?.map((color, key) => {
                return (
                  <option key={key} value={color.code}>
                    {color.name}
                  </option>
                );
              })}
            </select>
            <select>
              {options?.storage?.map((storage, key) => {
                return (
                  <option key={key} value={storage.code}>
                    {storage.name}
                  </option>
                );
              })}
            </select>
            <button className="product-detail-add-button"><span>Add</span><MdAddShoppingCart /></button>
          </div>
        </div>
      </div>
    );
  }
}
