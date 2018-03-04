import React from 'react';
import TextBox from '../components/TextBox';
import TodoListItem from './TodoListItem';
import TodoRadioContainer from './TodoRadioContainer';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: undefined,
      priority: 'high'
    };
  }

  sortByPriority = () => {
    if (this.state.priority === 'high') {
      return (a, b) => {
        if(a.type > b.type) {
          return 1;
        }

        if(a.type < b.type) {
          return -1;
        }
      }
    }

    if (this.state.priority === 'medium') {
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
    if (radioBtn.checked === true) {
      this.setState({
        priority: radioBtn.value
      });
    }
  };

  render() {
    const priority = this.state.priority;
    const search = this.state.search;
    const todos = search
      ? this.props.todos.filter(todo => todo.text.indexOf(search) != -1)
        .sort(this.sortByPriority())
      : this.props.todos.sort(this.sortByPriority());
    const onChangeTodo = this.props.onChangeTodo;
    return (
      <div>
        <div className="list">
          <TextBox
            value={this.state.search}
            onChange={value => this.setState({ search: value })}
          />
          {todos.map((todo, index) => {
            return (
              <TodoListItem
                onChangeTodo={onChangeTodo}
                key={`${todo.type}${todo.text}${index}`}
                todo={todo}
                index={index}
              />
            );
          })}
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
