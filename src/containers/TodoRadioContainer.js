import React from 'react';
import Radio from '../components/Radio';
import types from '../constants';

export default class TodoRadioContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isHighPriorityFirst = this.props.isHighPriorityFirst;
    const onChangeRadio=this.props.onChangeRadio;
    return (
      <form>
        <b>Показывать с приоритетом</b>
        <p>Высокий<Radio value="high" isHighPriorityFirst={isHighPriorityFirst} onChangeRadio={onChangeRadio} /></p>
        <p>Низкий<Radio value="low" isHighPriorityFirst={!isHighPriorityFirst} onChangeRadio={onChangeRadio} /></p>
      </form>
    );
  }
}
