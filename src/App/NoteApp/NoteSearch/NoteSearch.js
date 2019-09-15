import React, { Component } from "react";

export class NoteSearch extends Component {
  render() {
    return (
      <input
        className="noteSearch"
        type="search"
        placeholder="Search..."
        onChange={this.props.onSearch}
      />
    );
  }
}

export default NoteSearch;
