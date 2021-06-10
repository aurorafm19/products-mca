import React,{ Component } from 'react';
import '../css/header.css';

export default class Breadcrumbs extends Component {
    render() {
      return (
        <div className="breadcrumbs">
            <a className="breadcrumbs" href="/">Home</a>
            {window.location.href.includes('product') ? <div className="breadcrumbs">product detail</div> : <div></div>}
        </div>
      );
    }
  }