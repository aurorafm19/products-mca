import React,{ Component } from 'react';
import '../css/header.css';

export default class Breadcrumbs extends Component {
    render() {
      return (
        <div className="breadcrumbs">
            <a className="breadcrumbs" href="/">Home</a>
        </div>
      );
    }
  }