import React from 'react';

export default function Radio(props) {
  const onChangeRadio = props.onChangeRadio;
  const value = props.value;
  const priority = props.priority;

  return (
    <input
      name="priority"
      type="radio"
      value={value}
      checked={value === priority}
      onChange={e => onChangeRadio(e.target)}
    />
  );
}