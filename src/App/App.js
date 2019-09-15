import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import TodoApp from "./TodoApp/TodoApp";
import NoteApp from "./NoteApp/NoteApp";
import Header from "./Header/Header";





export class App extends React.Component {
 render() {
   return (
     <Router>
       <div className="App">
         <Header />
         <main className="container">
           <Route path="/" exact component={NoteApp} />
         </main>
   
       </div>
     </Router>
   );
 }
}
export default App;