import React from 'react';
import TodoAppHeader from './TodoAppHeader';
import TodoList from './TodoList';
import TodoRadioContainer from './TodoRadioContainer';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isHighPriorityFirst: true
    };
  }

  onAddTodo = todo => {
    const todos = this.state.todos;
    const isHighPriorityFirst = this.state.isHighPriorityFirst;
    this.setState({
      todos: [...todos, todo].sort(this.sortByPriority(isHighPriorityFirst))
    });
  };

  onChangeTodo = (todo, index) => {
    const todos = this.state.todos;
    const isHighPriorityFirst = this.state.isHighPriorityFirst;
    todos[index] = todo;
    this.setState({
      todos: todos.sort(this.sortByPriority(isHighPriorityFirst))
    });
  };

  onDeleteTodo = (index) => {
    const todos = this.state.todos;
    todos.splice(index, 1)
    this.setState({
      todos: todos
    });
  };

  sortByPriority = isDescending => (a, b) => {
    if(a.type > b.type) {
      return isDescending ? -1 : 1;
    }

    if(a.type < b.type) {
      return isDescending ? 1 : -1;
    }
  };

  onChangeRadio = () => {
    const todos = this.state.todos;
    const isHighPriorityFirst = this.state.isHighPriorityFirst;
    this.setState({
      todos: todos.sort(this.sortByPriority(!isHighPriorityFirst)),
      isHighPriorityFirst: !isHighPriorityFirst
    });
  };

  render() {
    const todos = this.state.todos;
    const isHighPriorityFirst = this.state.isHighPriorityFirst;
    return (
      <div>
        <TodoAppHeader onAddTodo={this.onAddTodo} />
        <div className="list">
          <TodoList onChangeTodo={this.onChangeTodo} onDeleteTodo={this.onDeleteTodo} todos={todos} />
        </div>
        <div className="radio-container">
          <TodoRadioContainer
          isHighPriorityFirst={isHighPriorityFirst}
          onChangeRadio={this.onChangeRadio}
          />
        </div>
      </div>
    );
  }
}
