import React, { Component } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import "../css/searchbar.css";

export default class Searchbar extends Component {

    state = {
        searchValue: ''
    }
    
    handleChange = (event) => {
        this.setState({searchValue: event.target.value});
    }

    resetSearchValue = () => {
        this.setState({searchValue: ''})
    }
    
    
    componentDidUpdate() {
        if (this.props.onChange) {
            this.props.onChange(this.state);
        }
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