import React, { Component } from "react";
import "../css/product-card.css";
import { getProductDetail } from "../services/products";

export default class ProductDetail extends Component {
  state = {
    details: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getProductDetail(id).then((data) => this.setState({ details: data }));
  }

  render() {
    const { imgUrl, options } = this.state.details;
    return (
      <div className="product-detail">
          <img
          className="product-card-image"
          src={imgUrl}
          alt="mobile"
        />

        <div className="product-detail-content">
          <div className="product-detail-description">
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="product-detail-actions">
              <select>
                  {options?.colors?.map((color, key) => {
                    return <option key={key} value={color.code}>{color.name}</option>
                  })}
              </select>
              <select>
                  {options?.storage?.map((storage, key) => {
                    return <option key={key} value={storage.code}>{storage.name}</option>
                  })}
              </select>
          </div>
        </div>
      </div>
    );
  }
}
