import React from 'react';
import Radio from '../components/Radio';
import types from '../constants';

export default class TodoRadioContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  /*onAddNewTodo = () => {
    if (this.state.newTodoType && this.state.newTodoText) {
      const newTodo = {
        text: this.state.newTodoText,
        type: this.state.newTodoType,
      };
      const onAddTodo = this.props.onAddTodo;
      this.setState(
        {
          newTodoText: undefined,
        },
        () => onAddTodo(newTodo),
      );
    }
  };*/

  render() {
    const priority=this.props.priority;
    const onChangeRadio=this.props.onChangeRadio;
    /*const newTodoText = this.state.newTodoText;
    const newTodoType = this.state.newTodoType;*/
    return (
      <form>
        <b>Показывать с приоритетом</b>
        <p>Высокий<Radio value="high" priority={priority} onChangeRadio={onChangeRadio} /></p>
        <p>Средний<Radio value="medium" priority={priority} onChangeRadio={onChangeRadio} /></p>
      </form>
    );
  }
}
