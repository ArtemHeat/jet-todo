import React from 'react';

export default function Radio(props) {
  const onChangeRadio = props.onChangeRadio;
  const value = props.value;
  const isHighPriorityFirst = props.isHighPriorityFirst;

  return (
    <input
      name="priority"
      type="radio"
      value={value}
      checked={isHighPriorityFirst}
      onChange={() => onChangeRadio()}
    />
  );
}