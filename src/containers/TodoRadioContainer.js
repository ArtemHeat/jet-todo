import React from 'react';
import Radio from '../components/Radio';
import types from '../constants';

export default class TodoRadioContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const priority=this.props.priority;
    const onChangeRadio=this.props.onChangeRadio;
    return (
      <form>
        <b>Показывать с приоритетом</b>
        <p>Высокий<Radio value="high" priority={priority} onChangeRadio={onChangeRadio} /></p>
        <p>Средний<Radio value="medium" priority={priority} onChangeRadio={onChangeRadio} /></p>
      </form>
    );
  }
}
