import React from 'react';
import TextBox from '../components/TextBox';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: undefined,
    };
  }

  render() {
    const search = this.state.search;
    const todos = search
      ? this.props.todos.filter(todo => todo.text.indexOf(search) != -1)
      : this.props.todos;
    const onChangeTodo = this.props.onChangeTodo;
    const onDeleteTodo = this.props.onDeleteTodo;
    return (
      <div>
        <TextBox
          value={this.state.search}
          onChange={value => this.setState({ search: value })}
        />
        {todos.map((todo, index) => {
          return (
            <TodoListItem
              onChangeTodo={onChangeTodo}
              onDeleteTodo={onDeleteTodo}
              key={`${todo.type}${todo.text}${index}`}
              todo={todo}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}
