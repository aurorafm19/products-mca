import React, { Component } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import "../css/searchbar.css";

export default class Searchbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchValue: ''
    }
  }

    
    handleChange = (event) => {
      if (this.props.onChange) {
          this.setState({searchValue:event.target.value}, () => {this.updateState()});
      }
    }

    updateState() {
      this.props.onChange(this.state);
    }

    resetSearchValue = () => {
        this.setState({searchValue: ''}, () => {this.updateState()});
    }

  render() {
    return (
      <div className="searchbar">
        <MdSearch className="search-icon"/>
        <input className="searchbar-input" type="text" placeholder="search" value={this.state.searchValue} onChange={this.handleChange} />
        <MdClose className="close-icon" onClick={this.resetSearchValue}/>
      </div>
    );
  }
}