
import React, { Component } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import displace from 'displacejs';
export class Note extends Component {
  componentDidMount() {
    console.log(this.element)
    const d = displace(this.element, {})
  }
  render() {
    let style = { backgroundColor: this.props.color };
    return (
      <div>
      <div className="handle">
        <div className="note" ref={(item) => this.element = item} style={style}>
          <span className="delete-note" onClick={this.props.onDelete}>
            ×
          </span>

          {this.props.children}
        </div>
      </div>
    </div>
    );
  }
}
export default Note;
