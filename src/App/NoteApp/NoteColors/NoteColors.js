import React, { Component } from "react";
export class NoteColors extends Component {
  render() {
    let colors = ["#F8C6C9", "#E9E1DF", "#D6C6E2", "#C5E2F3", "#C7D0EB", "#F2F89B"];
    return (
      <div className="colors-list">
        {colors.map((el, i) => {
          return (
            <div key={i} style={{ backgroundColor: el }}>
              <input
                className="radio-custom"
                id={el}
                type="radio"
                name="color"
                onChange={e => this.props.onColorChanged(e, el)}
              />
              <label className="radio-custom-label" htmlFor={el} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default NoteColors;
