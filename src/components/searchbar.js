import React, { Component } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { SEARCHBAR_PLACEHOLDER } from '../constants';
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
        <input className="searchbar-input" type="text" placeholder={SEARCHBAR_PLACEHOLDER} value={this.state.searchValue} onChange={this.handleChange} />
        <MdClose className="close-icon" data-testid="close-button" onClick={this.resetSearchValue}/>
      </div>
    );
  }
}