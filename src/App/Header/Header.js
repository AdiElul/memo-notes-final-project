import React, { Component } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class Header extends Component {
 render() {
   const { location } = this.props;
   console.log("location", location.pathname.split("/"));
   return (
     <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link to="/" className="navbar-brand">
           My Notes
         </Link>
         <FontAwesomeIcon icon={faHome} />
       </nav>
     </div>
   );
 }
}
export default withRouter(Header);