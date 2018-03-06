import React from 'react';
import TodoAppHeader from './TodoAppHeader';
import TodoList from './TodoList';
import TodoRadioContainer from './TodoRadioContainer';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      priority: 'high'
    };
  }

  onAddTodo = todo => {
    const todos = this.state.todos;
    const priority = this.state.priority;
    this.setState({
      todos: [...todos, todo].sort(this.sortByPriority(priority))
    });
  };

  onChangeTodo = (todo, index) => {
    const todos = this.state.todos;
    const priority = this.state.priority;
    todos[index] = todo;
    this.setState({
      todos: todos.sort(this.sortByPriority(priority))
    });
  };

  onDeleteTodo = (index) => {
    const todos = this.state.todos;
    todos.splice(index, 1)
    this.setState({
      todos: todos
    });
  };

  sortByPriority = (priorityLevel) => {
    if (priorityLevel === 'high') {
      return (a, b) => {
        if(a.type > b.type) {
          return 1;
        }

        if(a.type < b.type) {
          return -1;
        }
      }
    }

    if (priorityLevel === 'medium') {
      return (a, b) => {
        if(a.type > b.type) {
          return -1;
        }

        if(a.type < b.type) {
          return 1;
        }
      }
    }
  };

  onChangeRadio = (radioBtn) => {
    const todos = this.state.todos;    
    this.setState({
      todos: todos.sort(this.sortByPriority(radioBtn.value)),
      priority: radioBtn.value
    });
  };

  render() {
    const todos = this.state.todos;
    const priority = this.state.priority;
    return (
      <div>
        <TodoAppHeader onAddTodo={this.onAddTodo} />
        <div className="list">
          <TodoList onChangeTodo={this.onChangeTodo} onDeleteTodo={this.onDeleteTodo} todos={todos} />
        </div>
        <div className="radio-container">
          <TodoRadioContainer
          priority={priority}
          onChangeRadio={this.onChangeRadio}
          />
        </div>
      </div>
    );
  }
}
