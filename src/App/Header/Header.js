import React, { Component } from "react";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";

export class Header extends Component {
  render() {
    const { location } = this.props;
    console.log("location", location.pathname.split("/"));
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
          <Link to="/" className="navbar-brand">
            <i className="fa fa-pencil fa-fw"></i>
            My Notes
          </Link>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
