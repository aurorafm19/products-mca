import React, { Component } from 'react';
import { PRODUCT_DETAIL_BREADCRUMB } from '../constants';
import '../css/header.css';

export default class Breadcrumbs extends Component {
    render() {
      return (
        <div className="breadcrumbs">
            <a className="breadcrumbs" href="/">Home</a>
            {window.location.href.includes('product') ? <div className="breadcrumbs is-detail">> {PRODUCT_DETAIL_BREADCRUMB}</div> : <div></div>}
        </div>
      );
    }
  }