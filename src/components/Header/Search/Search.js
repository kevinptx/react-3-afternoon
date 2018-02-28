import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

export default class Search extends Component {
  constructor() {
    super();

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.props.filter(e.target.value);
  }

  render() {
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            onChange={e => this.onChangeHandler(e)}
            placeholder="Search Your Feed"
          />

          <SearchIcon id="Search__icon" />
        </div>
      </section>
    );
  }
}
