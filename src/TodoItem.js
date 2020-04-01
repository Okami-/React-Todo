import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super();
    this.state = {
      completed: false
    };
  }

  toggleCompleted = event => {
    this.setState({ completed: !this.state.completed });
  };

  render() {
    return (
      <li className={this.state.completed ? "completed" : null}>
        <input
          className="complete-todo"
          name="completeTodo"
          type="checkbox"
          checked={this.state.completed}
          onChange={this.toggleCompleted}
        />
        <label>{this.props.todo}</label>
        <button
          className="delete-todo-item"
          onClick={() => this.props.onDelete(this.props.id)}
        />
      </li>
    );
  }
}

export default TodoItem;
