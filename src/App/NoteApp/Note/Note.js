import React, { Component } from 'react'

export class Note extends Component {
    render() {
        let style = {backgroundColor: this.props.color};
        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}>×</span>
                <button className="Edit-note" onClick={this.props.onEdit}>Edit</button>
                {this.props.children}
                </div>
        );
    }
}

export default Note
