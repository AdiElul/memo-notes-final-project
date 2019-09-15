import React, { Component } from "react";
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm/TodoForm";
import { Link } from "react-router-dom";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {
      todoItems: [
        { index: 1, value: "learn react", done: false },
        { index: 2, value: "Go shopping", done: true },
        { index: 3, value: "buy flowers", done: true }
      ]
    };
  }
  addItem(todoItem) {
    const todoItemsCloned = [...this.state.todoItems];
    todoItemsCloned.unshift({
      index: this.state.todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems: todoItemsCloned });
  }
  removeItem(itemIndex) {
    const todoItemsCloned = [...this.state.todoItems];
    todoItemsCloned.splice(itemIndex, 1);
    this.setState({ todoItems: todoItemsCloned });
  }
  markTodoDone(itemIndex) {
    const todoItemsCloned = [...this.state.todoItems];
    var todo = this.state.todoItems[itemIndex];
    todoItemsCloned.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItemsCloned.push(todo) : todoItemsCloned.unshift(todo);
    this.setState({ todoItems: todoItemsCloned });
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-box">
          <div id="main">
            <TodoHeader />
            <TodoList
              items={this.state.todoItems}
              removeItem={this.removeItem}
              markTodoDone={this.markTodoDone}
            />
            <TodoForm addItem={this.addItem} />
          </div>
        </div>
      </div>
    );
  }
}
export default TodoApp;
