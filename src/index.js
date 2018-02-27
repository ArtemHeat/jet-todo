import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.PureComponent {
  render() {
    return <div>I'am App</div>;
  }
}

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<App />, MOUNT_NODE);
