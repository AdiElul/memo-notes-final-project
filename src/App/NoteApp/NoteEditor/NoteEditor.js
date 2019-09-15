import React, { Component } from "react";
import NoteColors from "../NoteColors/NoteColors";
export class NoteEditor extends Component {
 constructor(props) {
   super(props);
   this.state = {
     text: "",
     color: "",
     checked: false
   };
   this.hadleTextChange = this.hadleTextChange.bind(this);
   this.hadleColorChange = this.hadleColorChange.bind(this);
   this.handleNoteAdd = this.handleNoteAdd.bind(this);
 }
 hadleTextChange(e) {
   this.setState({
     text: e.target.value
   });
 }
 hadleColorChange(e, color) {
   const input = e.target;
   this.setState({
     color: color,
     checked: input.checked
   });
 }
 handleNoteAdd() {
   if (this.state.text.length) {
     const newNote = {
       about: this.state.text,
       color: this.state.color,
       id: new Date()
     };
     if (this.state.checked) {
       this.props.onNoteAdd(newNote);
       this.setState({
         text: "",
         color: "",
         checked: false
       });
     }
   }
 }
 render() {
     console.log('noteEditor:',this.state)
   return (
     <div className="note-editor">
       <textarea
         className="textarea"
         placeholder="Enter your note here..."
         rows={5}
         value={this.state.text}
         onChange={this.hadleTextChange}
       ></textarea>
       <div className="controls">
         <NoteColors onColorChanged={this.hadleColorChange} />
         <button className="add-button" onClick={this.handleNoteAdd}>
           Add
         </button>
       </div>
     </div>
   );
 }
}
export default NoteEditor;