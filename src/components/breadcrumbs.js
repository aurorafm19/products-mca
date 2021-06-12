import React,{ Component } from 'react';
import '../css/header.css';
import {PRODUCT_DETAIL_BREADCRUMB} from '../constants';

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