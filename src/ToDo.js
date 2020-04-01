import React from "react";
import TodoItem from "./TodoItem";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      todoList: []
    };

    this.ENTER_KEY = 13;
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChange = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  handleKeyDown = event => {
    if (event.keyCode !== this.ENTER_KEY) {
      return;
    }
    event.preventDefault();
    const trimmedTodo = this.state.newTodo.trim();
    this.state.todoList.push(trimmedTodo);
    this.setState({ newTodo: "" });
  };

  deleteTodo = id => {
    const copy = [...this.state.todoList];
    copy.splice(id, 1);
    this.setState({
      todoList: copy
    });
  };

  render() {
    const todoItems = this.state.todoList.map((todo, i) => {
      return (
        <TodoItem
          todo={todo}
          id={i}
          key={i} //need a better implementation
          onDelete={this.deleteTodo}
        />
      );
    });

    return (
      <>
        <div className="todo-container">
          <input
            className="todo-entry"
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder="What to do?"
            onKeyDown={this.handleKeyDown}
          />
          <ul className="todo-list">{todoItems}</ul>
        </div>
      </>
    );
  }
}

export default ToDo;
